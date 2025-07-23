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
    title: 'HeyTed',
    description:
      'A physical therapeutic chatbot device to support mental health conversations, similar to the rubber duck debugging technique.',
    imageUrl: 'project_images/HeyTed.png',
    techStack: 'Python, Django, Gemini API',
  },
  { 
    title: 'Wallet Tracker',
    description: 
      'Conducted a data-driven analysis to determine whether changes in a person\'s walking pattern can determine whether a wallet is lost or stolen.',
    imageUrl: 'project_images/wallet_dropped.png',
    techStack: 'Python, Numpy, Pandas, Matplotlib'
  },
  {
    title: 'Cookie Grabber',
    description:
      'A 4-player multiplayer game where players compete to collect the most cookies.',
    imageUrl: 'project_images/CookieGrabber.png',
    techStack: 'Python, Pygame, Python socket module',
  },
  {
    title: 'Pignance',
    description: 
      'A financial literacy game that teaches kids about money management through a reward system.',
    imageUrl: 'project_images/Pignance.png',
    techStack: 'Next.js, Tailwind CSS, MongoDB Atlas'
  },
  {
    title: "Next Tea Me",
    description: 
      'A social app to help users find tea buddies by matching them with others based on proximity at a cafe',
    imageUrl: 'project_images/NextTeaMe.jpg',
    techStack: 'Django, Sockets, Firebase',
  }
];

export default function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
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