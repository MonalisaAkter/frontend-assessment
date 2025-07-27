import React from 'react';
import { Section } from '@/types/product';

type SectionRendererProps = {
  sections: Section[];
  type: string;
  title: string;
};

export const SectionRenderer = ({ sections, type, title }: SectionRendererProps) => {
  const filtered = sections.filter(s => s.type === type);
  if (filtered.length === 0) return null;

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {filtered.map(sec => (
        <div key={sec.id} className="mb-4">
          <h3 className="text-xl font-medium">{sec.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: sec.description }} />
        </div>
      ))}
    </section>
  );
};

export {};
