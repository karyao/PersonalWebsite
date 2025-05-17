import styles from './styles/About.module.css';

export default function About() {
  return ( 
    <div className={styles.aboutMeContainer}>
      <h2 className={styles.aboutMeHeader}>Driven by passion, caffeine, Stack Overflow, and blind faith </h2>
      <div className={styles.aboutMeContent}> 
        Hello! I am currently a student at Simon Fraser University, pursuing a degree in Computing Science with a minor in Statistics!
      </div>
    </div>
  );
}
