import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './styles/NavBar.module.css'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logoLink}>
        <img
          src="/KY_Logo_Purple.png"
          alt="Karen Yao Logo"
          className={styles.logo}
        />
      </a>

      <button
        className={styles.menuButton}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`${styles.links} ${open ? styles.open : ''}`}>
        <a href="/about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="/experience" onClick={() => setOpen(false)}>
          Experience
        </a>
        <a href="/projects" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a className={styles.contact}
          href="/contact"
          onClick={() => setOpen(false)}
        >
        Let’s Chat!
        </a>
      </div>
    </nav>
  )
}
