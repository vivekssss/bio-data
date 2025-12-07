import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTemplateBySlug, templates } from "@/data/templates";
import { TemplateDetailClient } from "@/components/TemplateDetailClient";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return templates.map((template) => ({ slug: template.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const template = getTemplateBySlug(params.slug);
  if (!template) {
    return {
      title: "Biodata template not found",
    };
  }

  return {
    title: `${template.name} biodata template | Youth Biodata Hub`,
    description: template.headline,
  };
}

export default function TemplatePage({ params }: PageProps) {
  const template = getTemplateBySlug(params.slug);

  if (!template) {
    return notFound();
  }

  return <TemplateDetailClient template={template} />;
}
