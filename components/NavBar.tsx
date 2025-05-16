import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.title}>KY</div>
      <div className={styles.links}>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
