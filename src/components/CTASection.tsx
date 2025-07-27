import React from 'react';

type CTASectionProps = {
  title: string;
  url: string;
};

export const CTASection = ({ title, url }: CTASectionProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6">
        {title} - ৳1000
      </button>
    </a>
  );
};
