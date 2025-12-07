'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import type { BiodataTemplate } from "@/data/templates";

interface TemplateCardProps {
  template: BiodataTemplate;
  index?: number;
}

export function TemplateCard({ template, index = 0 }: TemplateCardProps) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      <motion.article
        layout
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.03,
          type: "spring",
          stiffness: 260,
          damping: 24,
        }}
        className="relative flex flex-col justify-between rounded-xl border border-white/10 bg-slate-900/60 p-3 shadow-lg shadow-slate-950/60 ring-1 ring-slate-900/40 transition hover:-translate-y-1 hover:border-slate-300/40 hover:bg-slate-900 hover:shadow-xl cursor-pointer sm:p-4"
      >
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-md text-xs font-semibold text-white"
                style={{ backgroundColor: template.accentColor }}
              >
                <FileText className="h-3 w-3" />
              </span>
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                {template.name}
              </h3>
            </div>
            <span className="rounded-full bg-slate-800/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-200/80">
              {template.category}
            </span>
          </div>
          <p className="line-clamp-2 text-[11px] text-slate-300/90 sm:text-sm">
            {template.headline}
          </p>
          <div className="flex flex-wrap gap-1 pt-1">
            {template.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
            100% free  no login
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-sky-300 transition group-hover:text-sky-200">
            View template
            <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
