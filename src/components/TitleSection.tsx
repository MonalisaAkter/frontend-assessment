import React from 'react';

type TitleSectionProps = {
  title: string;
};

export const TitleSection = ({ title }: TitleSectionProps) => {
  return <h1 className="text-4xl font-bold my-4">{title}</h1>;
};
