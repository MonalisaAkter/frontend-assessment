export interface Checklist {
  id: number;
  text: string;
}

export interface Section {
  id: number;
  type: string;
  title: string;
  description: string;
}

export interface CtaText {
  title: string;
  url: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords: string[];
}

export interface Medium {
  type: string;
  url: string;
}

export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}
