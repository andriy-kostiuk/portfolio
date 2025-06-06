import { getMessages } from 'next-intl/server';
import { ProjectPage } from '@/modules/ProjectPage';
import { Project as ProjectType } from '@/types';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    id: ProjectType['id'];
    locale: string;
  }>;
}

export async function generateStaticParams() {
  const messages = await getMessages({ locale: 'en' });
  const projects = (messages.projects as ProjectType[]) ?? [];

  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function Project({ params }: Props) {
  const { id, locale } = await params;

  const messages = await getMessages({ locale });
  const projects = (messages.projects as ProjectType[]) ?? [];

  const currentProject = projects.find((p) => p.id === id);

  if (!currentProject) return notFound();

  return <ProjectPage project={currentProject} />;
}
