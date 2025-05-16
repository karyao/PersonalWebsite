import styles from './NavBar.module.css';


export default function NavBar() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.title}>
        <a href="#home">
          <img src="/KY_Logo.png" alt="Karen Yao Logo" className={styles.logo} />
        </a>
      </div>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
