'use client';

import { useState } from 'react';
import styles from './styles/Experience.module.css';

// Tab labels
const tabs = ['All', 'Technical', 'Non-Technical'] as const;
type Tab = typeof tabs[number];

// Experience item interface
interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  description: string;
  type: Tab;
}

// Data for experiences
const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'SFU Robot Soccer',
    description: 'Worked on path finding for autonomous robots using C++, currently working on a UI refactor for simulation using QML and Qt',
    type: 'Technical',
  },
  {
    id: 2,
    title: 'Vice President',
    company: 'SFU Computing Science Student Society',
    description: 'Representing 2,500 Computing Science students, managing a team of 12 executives, and overseeing the society\'s operations. Currently working on events such as a Game Jam, and a Tech Fair.',
    type: 'Non-Technical',
  },
  {
    id: 3,
    title: 'Coding Instructor ',
    company: 'Code Ninjas',
    description: 'Taught coding concepts to children aged 5-14, using MakeCode, JavaScript, Roblox Lua, and Unity.',
    type: 'Technical',
  },
  { 
    id: 4,
    title: "Assistant Director of Events",
    company: "SFU Computing Science Student Society",
    description: "Organized and managed 10 social events for over 2,500 Computing Science students",
    type: 'Non-Technical',
  },
];

export default function Experience() {
  const [filter, setFilter] = useState<Tab>('All');
  const displayed = filter === 'All' ? EXPERIENCE : EXPERIENCE.filter(e => e.type === filter);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Experience</h2>

        <div className={styles.experienceContainer}>
          {tabs.map(tab => (
            <button
              key={tab}
              className={`${styles.filterButton} ${filter === tab ? styles.active : ''}`}
              onClick={() => setFilter(tab as Tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.cards}>
          {displayed.map(exp => (
            <div key={exp.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{exp.title}</h3>
                <p className={styles.cardCompany}>{exp.company}</p>
                <p className={styles.cardDescription}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
