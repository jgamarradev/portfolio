export interface Project {
  id: number;
  title: string;
  description: string;
  descriptionEs: string;
  descriptionEn: string;
  image: string;
  url: string;
}

export interface Experience {
  title: string;
  period: string;
  company: string;
}

export interface Education {
  title: string;
  period?: string;
  institution: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export type Language = 'es' | 'en';

