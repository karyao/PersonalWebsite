'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Hero.module.css';

export default function Home() {
  const phrases = [
    'a computer science student',
    'a problem solver',
    'an avid coffee drinker',
  ];

  return (
    <main className={styles.container}>
      <section className={styles.left}>
        <p className={styles.intro}>Nice to meet you, I&#39;m Karen :)</p>
        <h1 className={styles.title}>
          I&#39;m <Typewriter phrases={phrases} />
        </h1>
        <p className={styles.description}>
          I am a computing science student at Simon Fraser University, passionate about building
          impactful software and solving real-world problems.
        </p>
        <div className={styles.buttons}>
          <Link href="#projects" className={styles.primary}>
            View Projects 💻
          </Link>
          <Link href="#addlater" className={styles.secondary}>
            View Resume 📄
          </Link>
        </div>
      </section>
      <section className={styles.right}>
        <Image
          src="/Purple_Blob.png"
          alt="A purple blob for placeholder"
          width={550}
          height={550}
          className={styles.image}
        />
      </section>
    </main>
  );
}

function Typewriter({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIdx, setLoopIdx] = useState(0);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handle = setTimeout(() => {
      const full = phrases[loopIdx % phrases.length];
      setText(prev =>
        isDeleting ? full.substring(0, prev.length - 1) : full.substring(0, prev.length + 1)
      );
      setSpeed(isDeleting ? 50 : 80);

      if (!isDeleting && text === full) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopIdx(prev => prev + 1);
      }
    }, speed);

    return () => clearTimeout(handle);
  }, [text, isDeleting, loopIdx, phrases, speed]);

  return (
    <span className={styles.typewriter}>
      <span className={styles.animatedText}>{text}</span>
      <span className={styles.cursor} />
    </span>
  );
}
