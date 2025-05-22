import { projects } from '@/data/projects';
import { ProjectPage } from '@/modules/ProjectPage';
import { Project as ProjectType } from '@/types';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface Props {
  params: {
    id: ProjectType['id'];
  };
}

export default function Project({ params }: Props) {
  const currentProject = projects.find((p) => p.id === params.id);

  if (!currentProject) return notFound();

  return <ProjectPage project={currentProject} />;
}
