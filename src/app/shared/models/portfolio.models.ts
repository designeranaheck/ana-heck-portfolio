export interface Education {
  institution: string;
  institutionEn?: string;
  degree: string;
  degreeEn: string;
  period: string;
}

export interface Certification {
  title: string;
  titleEn: string;
  year?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  quoteEn: string;
}

export interface Experience {
  role: string;
  roleEn: string;
  company: string;
  period: string;
  periodEn: string;
  badge: string;
  badgeEn: string;
  description: string;
  descriptionEn: string;
  logo?: string;
}

export type ArticleBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'heading'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'image'; src: string; caption?: string };

export interface Article {
  slug: string;
  kicker: string;
  kickerEn: string;
  title: string;
  titleEn: string;
  meta: string;
  metaEn: string;
  cover: string;
  coverCaption?: string;
  coverCaptionEn?: string;
  coauthors?: string;
  coauthorsEn?: string;
  listDate: string;
  listDateEn: string;
  listTitle: string;
  listTitleEn: string;
  listExcerpt: string;
  listExcerptEn: string;
  body: ArticleBlock[];
  bodyEn: ArticleBlock[];
}
