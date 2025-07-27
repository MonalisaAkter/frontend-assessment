import React from 'react';

type DescriptionSectionProps = {
  html: string;
};

export const DescriptionSection = ({ html }: DescriptionSectionProps) => {
  return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />;
};
