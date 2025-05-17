import styles from './styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}> 
                <h3>Contact</h3>
                <a href="https://www.linkedin.com/in/karenjhyao/">LinkedIn</a>
            </div>
            Made with 🍵 and a lot more ☕️  
        </footer>

    )
}