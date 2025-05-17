import styles from './About.module.css';

export default function About() {
  return ( 
    <div className={styles.aboutMeContainer}>
      <h2 className={styles.aboutMeHeader}>Driven by Passion, Caffeine, Stack Overflow, and a Rubber Duck 🐥 </h2>
      <div className={styles.aboutMeContent}> 
        Hello! I am currently a student at Simon Fraser University, pursuing a degree in Computing Science with a minor in Statistics!

        I am passionate about building impactful software and solving real-world problems. I love to learn about new technology and want to apply my skills to solving any issues I encounter, even if they are problems I create myself.

        <br/><br/>
        I love getting involved in the community, and I am currently the Vice President of the SFU Computing Science Student Society. I love being able to meet new people and help around whenever I can. Outside of my busy schedule, I love to play video games, especially Valorant and any indie horror games, and also go cafe hopping around Vancouver!

      </div>
    </div>
  );
}
