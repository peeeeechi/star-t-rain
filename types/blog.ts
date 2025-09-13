export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  readTime: number;
  published: boolean;
}

export interface BlogMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  readTime: number;
  published: boolean;
}

export type BlogCategory = 
  | 'astronomy' 
  | 'technology' 
  | 'research' 
  | 'education' 
  | 'general';

export interface CategoryInfo {
  id: BlogCategory;
  name: string;
  description: string;
  color: string;
}