import React from 'react';
import styles from './ProjectPage.module.scss';
import { Gallery } from './components/Gallery';
import { Project } from '@/types';
import { Approach } from './components/Approach';
import { Features } from './components/Features';
import { Technologies } from './components/Technologies';

const projectTimelessMet: Project = {
  id: 'timeless-met',
  title: 'Timeless MET',
  subtitle: 'Modern Museum Landing Page',
  images: [
    '/img/projects/the-met/the-met-preview copy.webp',
    '/img/projects/the-met/the-met-preview copy 2.webp',
    '/img/projects/the-met/the-met-preview copy 3.webp',
    '/img/projects/the-met/the-met-preview copy 4.webp',
    '/img/projects/the-met/the-met-preview copy 5.webp',
    '/img/projects/the-met/the-met-preview copy 6.webp',
  ],
  demo: 'https://andriy-kostiuk.github.io/timeless_met/',
  gitHub: 'https://github.com/andriy-kostiuk/timeless_met',
  desc: [
    'A responsive and modern landing page for The MET museum, utilizing HTML5, CSS, and BEM methodology for a clean and maintainable code structure.',
    'Implemented with a focus on responsive design to ensure optimal viewing experience across all devices, from desktop computers to mobile phones.',
    "The landing page showcases The MET's rich history, collections, and artistic heritage through a visually compelling interface.",
  ],
  features: [
    'Responsive Design: Fully adaptive layout for all screen sizes from mobile to desktop.',
    'BEM Methodology: CSS organized according to Block-Element-Modifier principles for improved maintainability.',
    'CSS Animations: Subtle animations enhance user experience without impacting performance.',
    'Smooth Scrolling: Implemented for better navigation experience within the page.',
    'Custom Grid System: Hand-coded CSS grid layouts for flexible content organization.',
    'Burger Menu: Mobile-friendly navigation with animated hamburger menu toggle.',
    'Cross-Browser Compatibility: Tested and optimized for major browsers.',
    'Semantic HTML5: Properly structured markup to improve accessibility and SEO.',
  ],
  technologies: [
    'HTML5',
    'CSS3',
    'BEM methodology',
    'Mobile-first approach',
    'CSS Grid and Flexbox',
  ],
  goal: 'Creating a responsive website that captures the elegant aesthetic of The MET museum while ensuring excellent performance on all devices.',
  solution:
    'Implemented BEM methodology for maintainable CSS architecture and leveraged modern CSS techniques like Grid and Flexbox to create a responsive layout without relying heavily on JavaScript.',
};

export const ProjectPage = () => {
  const {
    title,
    subtitle,
    demo,
    gitHub,
    desc,
    features,
    images,
    technologies,
    goal,
    solution,
  } = projectTimelessMet;

  return (
    <section className={styles.project}>
      <Gallery images={images} className={styles.project__gallery} />

      <h1 className={styles.project__title}>{title}</h1>
      <h2 className={styles.project__subtitle}>{subtitle}</h2>

      <ul className={styles.project__actions}>
        <li>
          <a
            href={demo}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.project__link}
          >
            Live Demo
          </a>
        </li>
        <li>
          <a
            href={gitHub}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.project__link}
          >
            GitHub
          </a>
        </li>
      </ul>

      <div className={styles.project__desc}>
        {desc.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.project__approach}>
        <Approach title='Goal' text={goal} />
        <Approach title='Solution' text={solution} />
      </div>

      <Features features={features} className={styles.project__features} />

      <Technologies technologies={technologies} />
    </section>
  );
};
