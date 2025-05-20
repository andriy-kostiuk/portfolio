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
  img: string[];
  demo: string;
  gitHub: string;
  desc: string[];
  technologies: string[];
}
