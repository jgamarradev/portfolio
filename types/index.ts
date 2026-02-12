// Interfaz para la categoría de proyecto (desde WP)
export interface ProjectCategory {
  id: number;
  nameEs: string;
  nameEn: string;
  slug: string;
  count?: number;
}

// Interfaz actualizada para proyectos (desde WP API REST)
export interface Project {
  id: number;
  title: string;
  descriptionEs: string;
  descriptionEn: string;
  image: string;             // URL completa de la imagen desde WP
  url: string;               // URL externa del proyecto
  categories: ProjectCategory[];
  order: number;
  // Fase futura:
  // slug: string;
  // contentEs?: string;
  // contentEn?: string;
}

// Interfaz para la respuesta cruda de la API REST de WordPress
export interface WPProjectRaw {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string; protected: boolean };
  meta: {
    proyecto_url: string;
    descripcion_en: string;
    proyecto_orden: number;
  };
  categoria_proyecto: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      media_details?: {
        sizes?: {
          medium?: { source_url: string };
          large?: { source_url: string };
          full?: { source_url: string };
        };
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      meta?: { nombre_en?: string };
    }>>;
  };
}

// Interfaz para la respuesta cruda de categorías de la API REST de WordPress
export interface WPCategoryRaw {
  id: number;
  name: string;
  slug: string;
  count: number;
  nombre_en?: string;
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

