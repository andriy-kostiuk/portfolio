export interface ProjectPreview {
  id: string;
  title: string;
  preview: string;
  demo: string;
  gitHub: string;
  desc: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  demo: string;
  gitHub: string;
  desc: string[];
  features: string[];
  technologies: string[];
  goal: string;
  solution: string;
}
