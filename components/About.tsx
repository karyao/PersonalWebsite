import styles from './styles/About.module.css';

export default function About() {
  return ( 
    <div className={styles.about}>
      <h2>
        Driven by Passion, Caffeine, Stack Overflow, and a Rubber Duck 🐥 
      </h2>
      <div className="text-center"> 
        Hello! I am currently a student at Simon Fraser University, pursuing a degree in Computing Science with a minor in Statistics!

        I am passionate about building impactful software and solving real-world problems. I love to learn about new technology and want to apply my skills to solving any issues I encounter, even if they are problems I create myself.

        <br/><br/>
        Outside my busy schedule, I enjoy playing video games, cafe hoping, and just hanging out with friends :)
      </div>
    </div>
  );
}
