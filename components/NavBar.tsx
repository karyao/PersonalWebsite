import styles from './styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.title}>
        <a href="#home">
          <img src="/KY_Logo_Purple.png" alt="Karen Yao Logo" className={styles.logo} />
        </a>
      </div>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a className={styles.contact} href="#contact">Let's Chat!</a>
      </div>
    </nav>
  );
}
