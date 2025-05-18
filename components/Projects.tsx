'use client';

import styles from './styles/Projects.module.css';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Personal Portfolio',
    description:
      'A responsive and interactive portfolio built with Next.js, showcasing my work and personality.',
    imageUrl: '/images/portfolio-preview.png',
    techStack: 'Next.js, Tailwind CSS, Vercel',
  },
  {
    title: 'Piggy Bank Farm',
    description:
      'A gamified savings app that teaches kids the value of money through collecting pigs.',
    imageUrl: '/images/piggybank.png',
    techStack: 'React, Firebase, CSS Modules',
  },
];

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.list}>
        {PROJECTS.map((project) => (
          <div key={project.title} className={styles.projectRow}>
            <div className={styles.imageSection}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className={styles.image}
              />
            </div>
            <div className={styles.textSection}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>
              <p className={styles.techStack}><strong>Tech Stack:</strong> {project.techStack}</p>
              <button className={styles.cta}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 