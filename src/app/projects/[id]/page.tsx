import { projects } from '@/data/projects';
import { ProjectPage } from '@/modules/ProjectPage';
import { Project as ProjectType } from '@/types';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    id: ProjectType['id'];
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function Project({ params }: Props) {
  const { id } = await params;
  const currentProject = projects.find((p) => p.id === id);

  if (!currentProject) return notFound();

  return <ProjectPage project={currentProject} />;
}
