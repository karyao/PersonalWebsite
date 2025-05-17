'use client';

import { useState } from 'react';
import styles from './styles/Experience.module.css';

export default function Experience() {
  // our three tabs
  const tabs = ['All', 'Technical', 'Non-Technical'] as const;
  const [filter, setFilter] = useState<typeof tabs[number]>('All');

  return (
    <div className="m-6 text-black px-20">
      <h2 className="font-mono text-3xl text-center p-5">
        Experience
      </h2>

      <div className={styles.experienceContainer}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`
              ${styles.filterButton}
              ${filter === tab ? styles.active : ''}
            `}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TODO: render your experience items here filtered by `filter` */}
    </div>
  );
}
