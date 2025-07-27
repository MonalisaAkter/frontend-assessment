import React from 'react';
import { Checklist } from '@/types/product';

type Props = {
  checklist: Checklist[];
};

export const ChecklistSection = ({ checklist }: Props) => {
  return (
    <ul className="list-disc ml-6 my-4">
      {checklist.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
