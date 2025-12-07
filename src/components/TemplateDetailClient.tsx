"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check } from "lucide-react";
import Link from "next/link";
import type { BiodataTemplate } from "@/data/templates";
import { useLanguage } from "@/context/LanguageContext";
import {
  translateFieldLabel,
  translateSectionTitle,
  translateUseCase,
  translatePlaceholder,
} from "@/lib/i18n";

interface TemplateDetailClientProps {
  template: BiodataTemplate;
}

interface EditableField {
  key: string;
  label: string;
  value: string;
  placeholder?: string;
}

interface EditableSection {
  id: string;
  title: string;
  description?: string;
  fields: EditableField[];
}

type PrintDesign = "classic" | "boxed" | "minimal";

const printDesignOptions: { id: PrintDesign; label: string }[] = [
  { id: "classic", label: "Classic" },
  { id: "boxed", label: "Boxed" },
  { id: "minimal", label: "Minimal" },
];

export function TemplateDetailClient({ template }: TemplateDetailClientProps) {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  const [printDesign, setPrintDesign] = useState<PrintDesign>("classic");

  const storageKey = useMemo(
    () => `biodata-edit-${template.slug}`,
    [template.slug],
  );

  const defaultSections = useMemo<EditableSection[]>(
    () =>
      template.sections.map((section) => ({
        id: section.id,
        title: section.title,
        description: section.description,
        fields: section.fields.map((field) => ({
          key: field.key,
          label: field.label,
          value: field.placeholder ?? "",
          placeholder: field.placeholder ?? "",
        })),
      })),
    [template.sections],
  );

  const [sections, setSections] = useState<EditableSection[]>(defaultSections);

  useEffect(() => {
    // Try to restore from localStorage, otherwise fall back to defaults
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) {
        setSections(defaultSections);
        return;
      }
      const parsed = JSON.parse(raw) as { sections?: EditableSection[] };
      if (parsed.sections && Array.isArray(parsed.sections)) {
        setSections(parsed.sections);
      } else {
        setSections(defaultSections);
      }
    } catch {
      setSections(defaultSections);
    }
  }, [defaultSections, storageKey]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify({ sections }));
    } catch {
      // ignore write errors
    }
  }, [sections, storageKey]);

  function handleFieldLabelChange(
    sectionId: string,
    fieldKey: string,
    label: string,
  ) {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              fields: section.fields.map((field) =>
                field.key === fieldKey ? { ...field, label } : field,
              ),
            }
          : section,
      ),
    );
  }

  function handleAddSection() {
    const id = `custom-section-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 8)}`;
    const newSection: EditableSection = {
      id,
      title: "New section",
      description: "",
      fields: [
        {
          key: `${id}-field-1`,
          label: "New field",
          value: "",
          placeholder: "",
        },
      ],
    };
    setSections((prev) => [...prev, newSection]);
  }

  function handleDeleteSection(sectionId: string) {
    setSections((prev) => prev.filter((section) => section.id !== sectionId));
  }

  function handleFieldValueChange(
    sectionId: string,
    fieldKey: string,
    value: string,
  ) {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              fields: section.fields.map((field) =>
                field.key === fieldKey ? { ...field, value } : field,
              ),
            }
          : section,
      ),
    );
  }

  function handleAddField(sectionId: string) {
    const newField: EditableField = {
      key: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      label: "New field",
      value: "",
      placeholder: "",
    };
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, fields: [...section.fields, newField] }
          : section,
      ),
    );
  }

  function handleDeleteField(sectionId: string, fieldKey: string) {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              fields: section.fields.filter((field) => field.key !== fieldKey),
            }
          : section,
      ),
    );
  }

  function handleResetTemplate() {
    setSections(defaultSections);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
    }
  }

  function downloadFile(filename: string, mimeType: string, content: string) {
    if (typeof window === "undefined") return;
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  const plainText = useMemo(() => {
    const lines: string[] = [];
    lines.push(`Biodata – ${template.name}`);
    lines.push("");

    for (const section of sections) {
      lines.push(
        translateSectionTitle(section.title, language).toUpperCase(),
      );
      if (section.description) {
        lines.push(section.description);
      }
      for (const field of section.fields) {
        const rawValue = field.value?.trim() || field.placeholder || "";
        const isDefault =
          field.placeholder && field.value?.trim() === field.placeholder.trim();
        const valueToUse =
          language === "hi" && isDefault
            ? translatePlaceholder(rawValue, language)
            : rawValue;
        lines.push(
          `${translateFieldLabel(field.label, language)}: ${valueToUse}`,
        );
      }
      lines.push("");
    }

    return lines.join("\n");
  }, [language, sections, template.name]);

  const printWrapperClass = useMemo(() => {
    switch (printDesign) {
      case "boxed":
        return "hidden max-w-[780px] mx-auto bg-white px-8 py-8 text-sm text-slate-900 shadow-md shadow-slate-400/50 ring-1 ring-slate-300 print:block";
      case "minimal":
        return "hidden max-w-[720px] mx-auto bg-white px-4 py-6 text-xs leading-snug text-slate-900 print:block";
      default:
        return "hidden max-w-[760px] mx-auto bg-white px-6 py-8 text-sm text-slate-900 print:block";
    }
  }, [printDesign]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  function handleDownloadWord() {
    downloadFile(`${template.slug}.doc`, "application/msword", plainText);
  }

  function handleDownloadText() {
    downloadFile(`${template.slug}.txt`, "text/plain;charset=utf-8", plainText);
  }

  function handlePrint() {
    if (typeof window === "undefined") return;
    window.print();
  }

  async function handleShare() {
    if (typeof window === "undefined") return;
    try {
      if (navigator.share) {
        await navigator.share({
          title: `Biodata – ${template.name}`,
          text: plainText,
          url: window.location.href,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch {
      // user cancelled or share not available
    }
  }

  return (
    <div className="space-y-6">
      {/* Interactive layout (hidden in print/PDF) */}
      <div className="space-y-6 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/templates"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/60 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-slate-300/80 hover:bg-slate-900"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all templates
          </Link>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-emerald-950 shadow-sm transition hover:bg-emerald-400"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> Copy as text
              </>
            )}
          </button>
          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs">
            <button
              type="button"
              onClick={handleDownloadWord}
              className="rounded-full border border-slate-600/70 bg-slate-900/80 px-2.5 py-1 font-medium text-slate-200 transition hover:border-slate-400/80"
            >
              Download .doc
            </button>
            <button
              type="button"
              onClick={handleDownloadText}
              className="rounded-full border border-slate-600/70 bg-slate-900/80 px-2.5 py-1 font-medium text-slate-200 transition hover:border-slate-400/80"
            >
              Download .txt
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="rounded-full border border-slate-600/70 bg-slate-900/80 px-2.5 py-1 font-medium text-slate-200 transition hover:border-slate-400/80"
            >
              PDF / Print
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="rounded-full border border-slate-600/70 bg-slate-900/80 px-2.5 py-1 font-medium text-slate-200 transition hover:border-slate-400/80"
            >
              Share
            </button>
            <button
              type="button"
              onClick={handleResetTemplate}
              className="rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-1 font-medium text-slate-300 transition hover:border-slate-400/80"
            >
              Reset changes
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] text-slate-300 sm:text-xs">
            <span className="text-slate-400">PDF style:</span>
            {printDesignOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setPrintDesign(option.id)}
                className={`rounded-full border px-2.5 py-1 font-medium transition ${
                  printDesign === option.id
                    ? "border-emerald-400 bg-emerald-500/10 text-emerald-200"
                    : "border-slate-700/80 bg-slate-950/80 text-slate-300 hover:border-slate-400/80"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/90 shadow-2xl shadow-black/60"
        >
        <div
          className="border-b border-white/10 bg-slate-900/90 px-5 py-4 sm:px-6"
          style={{ boxShadow: `0 1px 0 ${template.accentColor}40` }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h1 className="text-base font-semibold text-slate-50 sm:text-lg">
                {template.name}
              </h1>
              <p className="text-xs text-slate-300/90 sm:text-sm">
                {template.headline}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 text-[10px] sm:text-[11px]">
              <span
                className="rounded-full px-2 py-0.5 font-medium text-white"
                style={{ backgroundColor: template.accentColor }}
              >
                {template.category}
              </span>
              <span className="text-[10px] text-slate-300/90">
                Use for:{" "}
                <span className="font-semibold">
                  {translateUseCase(template.useCase, language)}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 px-4 py-4 sm:grid-cols-[2.2fr,1.2fr] sm:px-6 sm:py-6">
          <div className="space-y-4">
            {sections.map((section) => (
              <section
                key={section.id}
                className="rounded-xl border border-slate-700/70 bg-slate-900/60 p-3 sm:p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <input
                    type="text"
                    value={translateSectionTitle(section.title, language)}
                    onChange={(e) =>
                      setSections((prev) =>
                        prev.map((s) =>
                          s.id === section.id
                            ? { ...s, title: e.target.value }
                            : s,
                        ),
                      )
                    }
                    className="w-full max-w-xs rounded-md border border-slate-700/80 bg-slate-900/80 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500/40 sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteSection(section.id)}
                    className="text-[10px] font-medium text-slate-400 hover:text-red-300"
                  >
                    Remove section
                  </button>
                </div>
                {section.description && (
                  <p className="mt-1 text-[11px] text-slate-300/90 sm:text-xs">
                    {section.description}
                  </p>
                )}
                <div className="mt-3 space-y-2">
                  {section.fields.map((field) => {
                    const isDefault =
                      field.placeholder &&
                      field.value.trim() === field.placeholder.trim();
                    const displayValue =
                      language === "hi" && isDefault
                        ? translatePlaceholder(field.value, language)
                        : field.value;

                    return (
                      <div
                        key={field.key}
                        className="space-y-1.5 rounded-lg border border-slate-700/70 bg-slate-950/70 px-3 py-2"
                      >
                      <div className="flex items-center justify-between gap-2">
                        <input
                          type="text"
                          value={translateFieldLabel(field.label, language)}
                          onChange={(e) =>
                            handleFieldLabelChange(
                              section.id,
                              field.key,
                              e.target.value,
                            )
                          }
                          className="w-full rounded-md border border-slate-700/70 bg-slate-900/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500/40"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            handleDeleteField(section.id, field.key)
                          }
                          className="shrink-0 rounded-full border border-slate-700/80 px-2 py-0.5 text-[10px] text-slate-300 transition hover:border-red-400/80 hover:text-red-300"
                        >
                          Remove
                        </button>
                      </div>
                        <textarea
                          rows={2}
                          value={displayValue}
                          onChange={(e) =>
                            handleFieldValueChange(
                              section.id,
                              field.key,
                              e.target.value,
                            )
                          }
                          placeholder={field.placeholder}
                          className="w-full rounded-md border border-slate-700/70 bg-slate-900/80 px-2 py-1.5 text-xs text-slate-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500/40 sm:text-sm"
                        />
                      </div>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => handleAddField(section.id)}
                    className="mt-1 inline-flex items-center gap-1 rounded-full border border-dashed border-slate-600/70 bg-slate-950/80 px-2.5 py-1 text-[10px] font-medium text-slate-200 transition hover:border-emerald-400/80 hover:text-emerald-200"
                  >
                    + Add field
                  </button>
                </div>
              </section>
            ))}
            <button
              type="button"
              onClick={handleAddSection}
              className="mt-1 inline-flex items-center gap-1 rounded-full border border-dashed border-slate-600/80 bg-slate-950/80 px-3 py-1.5 text-[11px] font-medium text-slate-200 transition hover:border-emerald-400/80 hover:text-emerald-200"
            >
              + Add section
            </button>
          </div>

          <aside className="space-y-3 text-[11px] text-slate-300">
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3">
              <h3 className="text-xs font-semibold text-emerald-300">
                How to use this template
              </h3>
              <ul className="mt-2 space-y-1 list-disc pl-4">
                <li>Copy the text using the button above.</li>
                <li>Paste it into Word, Google Docs, or Canva.</li>
                <li>Replace the example lines with your real details.</li>
                <li>Export as PDF or printed biodata as needed.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-3">
              <h3 className="text-xs font-semibold text-slate-100">
                Tips for youth
              </h3>
              <ul className="mt-2 space-y-1 list-disc pl-4">
                <li>Keep details honest and clear.</li>
                <li>Use a simple font and enough spacing.</li>
                <li>Highlight 2–3 best skills or projects.</li>
                <li>Save one master copy and customise per use.</li>
              </ul>
            </div>
          </aside>
        </div>

        </motion.div>
      </div>

      {/* Print-only layout for clean PDF / paper output */}
      <div className={printWrapperClass}>
        <div className="border-b border-slate-300 pb-3 text-center">
          <h1 className="text-xl font-bold tracking-wide">Biodata</h1>
          <p className="mt-1 text-[13px] font-semibold">{template.name}</p>
          <p className="mt-0.5 text-[11px] text-slate-600">{template.headline}</p>
        </div>
        <div className="mt-5 space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="space-y-1.5">
              <h2 className="border-b border-slate-300 pb-1 text-[13px] font-semibold uppercase tracking-wide">
                {translateSectionTitle(section.title, language)}
              </h2>
              {section.fields
                .map((field) => {
                  const rawValue = field.value?.trim() || field.placeholder || "";
                  if (!rawValue) return null;
                  const isDefault =
                    field.placeholder &&
                    field.value?.trim() === field.placeholder.trim();
                  const displayValue =
                    language === "hi" && isDefault
                      ? translatePlaceholder(rawValue, language)
                      : rawValue;
                  return {
                    key: field.key,
                    label: translateFieldLabel(field.label, language),
                    value: displayValue,
                  };
                })
                .filter(Boolean)
                .map((item) => (
                  <div key={item!.key} className="flex gap-2 text-[13px] leading-snug">
                    <span className="min-w-[130px] max-w-[160px] font-medium">
                      {item!.label}
                    </span>
                    <span className="flex-1">: {item!.value}</span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
