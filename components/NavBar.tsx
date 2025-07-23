'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './styles/NavBar.module.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoLink}>
        <img
          src="/KY_Logo_Purple.png"
          alt="Karen Yao Logo"
          className={styles.logo}
        />
      </Link>

      <button
        className={styles.menuButton}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`${styles.links} ${open ? styles.open : ''}`}>
        <Link
          href="#about"
          className={styles.link}
          onClick={() => setOpen(false)}
        >
          About
        </Link>
        <Link
          href="#experience"
          className={styles.link}
          onClick={() => setOpen(false)}
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className={styles.link}
          onClick={() => setOpen(false)}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className={`${styles.link} ${styles.contact}`}
          onClick={() => setOpen(false)}
        >
          Let’s Chat!
        </Link>
      </div>
    </nav>
  );
}
