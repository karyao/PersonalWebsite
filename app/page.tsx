'use client';

//import Link from 'next/link';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import styles from './page.module.css';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects /> 
      <Footer />
    </div>
  );
}
