import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <img src="/favicon.svg" alt="" width={22} height={21} />
          <span>ABTalks</span>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/day/12">Day 12</NavLink>
        </nav>

        <p className={styles.copy}>
          Built solo for the ABTalks Vibe Code Hackathon. No backend, no accounts — just mocked
          data for demo purposes.
        </p>
      </div>
    </footer>
  );
}
