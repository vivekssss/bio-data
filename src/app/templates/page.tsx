"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { templates, allCategories, useCaseFilters } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { useLanguage } from "@/context/LanguageContext";

const allCategoryOption = "All categories";

type UseCaseFilterId = (typeof useCaseFilters)[number]["id"];

export default function TemplatesPage() {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | typeof allCategoryOption>(
    allCategoryOption,
  );
  const [useCase, setUseCase] = useState<UseCaseFilterId>("all");

  const filtered = useMemo(() => {
    return templates.filter((template) => {
      const matchesQuery = query
        ? `${template.name} ${template.headline} ${template.category} ${template.tags.join(" ")}`
            .toLowerCase()
            .includes(query.toLowerCase())
        : true;

      const matchesCategory =
        category === allCategoryOption || template.category === category;

      const matchesUseCase =
        useCase === "all" ? true : template.useCase === useCase;

      return matchesQuery && matchesCategory && matchesUseCase;
    });
  }, [category, query, useCase]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-lg font-semibold text-slate-50 sm:text-2xl">
          {language === "hi" ? "सभी बायोडाटा टेम्पलेट" : "All biodata templates"}
        </h1>
        <p className="max-w-2xl text-xs text-slate-300 sm:text-sm">
          {language === "hi"
            ? "नौकरी, शादी और अन्य उपयोग के लिए अलग-अलग बायोडाटा फॉर्मेट चुनें। फील्ड और उपयोग के हिसाब से फ़िल्टर करें और मनपसंद टेम्पलेट खोलकर टेक्स्ट कॉपी करें।"
            : "Choose from job biodata, wedding biodata and other useful formats. Filter by field and use case, then open any template and copy the ready-made text."}
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/80 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <div className="flex-1">
          <label className="relative block text-xs text-slate-300">
            <span className="sr-only">
              {language === "hi" ? "टेम्पलेट खोजें" : "Search templates"}
            </span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                language === "hi"
                  ? "रोल, फील्ड या कीवर्ड से खोजें (जैसे software, wedding, teacher)"
                  : "Search by role, field or keyword (e.g. software, wedding, teacher)"
              }
              className="w-full rounded-full border border-slate-700/80 bg-slate-900/80 px-8 py-1.5 text-xs text-slate-100 outline-none ring-emerald-500/40 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-1 sm:text-sm"
            />
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value || allCategoryOption)}
            className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-100 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500/40 sm:text-xs"
          >
            <option value={allCategoryOption}>
              {language === "hi" ? "सभी श्रेणियाँ" : allCategoryOption}
            </option>
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <div className="flex flex-wrap items-center gap-1">
            {useCaseFilters.map((filter) => {
              const label =
                language === "hi"
                  ? filter.id === "all"
                    ? "सभी"
                    : filter.id === "job"
                    ? "नौकरी"
                    : filter.id === "wedding"
                    ? "शादी"
                    : filter.id === "education"
                    ? "इंटर्नशिप / शिक्षा"
                    : "अन्य / व्यक्तिगत"
                  : filter.label;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setUseCase(filter.id)}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-medium transition sm:text-[11px] ${
                    useCase === filter.id
                      ? "bg-emerald-500 text-emerald-950 shadow-sm"
                      : "bg-slate-900/80 text-slate-200 border border-slate-700/80 hover:border-slate-400/80"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300 sm:text-xs">
        <span>
          {language === "hi" ? (
            <>
              कुल <span className="font-semibold">{templates.length}</span> में से
              <span className="font-semibold"> {filtered.length}</span> टेम्पलेट
            </>
          ) : (
            <>
              Showing <span className="font-semibold">{filtered.length}</span> of
              <span className="font-semibold"> {templates.length}</span> templates
            </>
          )}
        </span>
      </div>

      <AnimatePresence mode="popLayout">
        {filtered.length ? (
          <motion.div
            key="grid"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-3 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((template, index) => (
              <TemplateCard
                key={template.id}
                template={template}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="rounded-2xl border border-dashed border-slate-700/80 bg-slate-950/70 p-6 text-center text-xs text-slate-300 sm:text-sm"
          >
            {language === "hi"
              ? "इस खोज के लिए कोई टेम्पलेट नहीं मिला। कुछ फ़िल्टर हटाएँ या अलग कीवर्ड आज़माएँ।"
              : "No templates found for this search. Try removing some filters or using a broader keyword."}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
