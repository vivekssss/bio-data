"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, FileText, HeartHandshake } from "lucide-react";
import { templates } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";

const featured = templates.slice(0, 6);

export default function Home() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="grid gap-6 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
            25+ biodata templates · 100% free · made for youth
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, type: "spring", stiffness: 220, damping: 22 }}
            className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            Free biodata templates for jobs, weddings and real life.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 220, damping: 22 }}
            className="text-balance text-sm text-slate-300 sm:text-base"
          >
            Stop paying for simple biodata PDFs. Copy ready-made formats for software,
            engineering, teaching, wedding biodata and more – and customise in Word,
            Google Docs or Canva.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, type: "spring", stiffness: 220, damping: 22 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-emerald-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 hover:shadow-emerald-400/40 sm:text-sm"
            >
              Browse all templates
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <span className="text-[11px] text-slate-300 sm:text-xs">
              No sign-up. Just copy the text and make it yours.
            </span>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, type: "spring", stiffness: 220, damping: 22 }}
            className="grid gap-3 pt-2 text-[11px] text-slate-200 sm:grid-cols-3 sm:text-sm"
          >
            <div className="flex items-start gap-2 rounded-lg border border-slate-700/70 bg-slate-900/70 p-2.5">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-400" />
              <div>
                <dt className="font-semibold">100% free forever</dt>
                <dd className="text-[11px] text-slate-300 sm:text-xs">
                  No paywalls, no watermarks – use in interviews, marriage proposals
                  or college.
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-lg border border-slate-700/70 bg-slate-900/70 p-2.5">
              <FileText className="mt-0.5 h-4 w-4 text-sky-400" />
              <div>
                <dt className="font-semibold">Templates for every field</dt>
                <dd className="text-[11px] text-slate-300 sm:text-xs">
                  IT, engineering, medical, teaching, govt, trades, wedding and more.
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-lg border border-slate-700/70 bg-slate-900/70 p-2.5">
              <HeartHandshake className="mt-0.5 h-4 w-4 text-pink-400" />
              <div>
                <dt className="font-semibold">Made for youth</dt>
                <dd className="text-[11px] text-slate-300 sm:text-xs">
                  Clear, simple language that works for freshers and families.
                </dd>
              </div>
            </div>
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 220, damping: 20 }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/15 via-sky-500/10 to-fuchsia-500/20 blur-3xl" />
          <div className="relative grid max-h-[380px] gap-3 overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/80 p-3 shadow-2xl shadow-black/60 sm:max-h-none sm:p-4">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                  Quick preview
                </p>
                <p className="text-[10px] text-slate-400">
                  A few examples from the 25+ templates
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {featured.slice(0, 4).map((template, index) => (
                <TemplateCard key={template.id} template={template} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
            Popular biodata formats
          </h2>
          <Link
            href="/templates"
            className="text-[11px] font-medium text-sky-300 hover:text-sky-200 sm:text-xs"
          >
            See all templates
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
