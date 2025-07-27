import React from 'react';

type TrailerProps = {
  url: string;
};

export const Trailer = ({ url }: TrailerProps) => {
  return (
    <iframe
      className="w-full h-64 my-4"
      src={url}
      title="Trailer"
      allowFullScreen
    />
  );
};
