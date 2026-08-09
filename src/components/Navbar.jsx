import { NavLink, useSearchParams } from 'react-router-dom';
import { Flame } from 'lucide-react';
import { getScenario } from '../utils/scenario';
import { computeCurrentStreak } from '../utils/challengeHelpers';
import styles from './Navbar.module.css';

function BrandMark() {
  return (
    <NavLink to="/" className={styles.brand} aria-label="ABTalks home">
      <img src="/favicon.svg" alt="" width={28} height={27} className={styles.brandMark} />
      <span className={styles.brandName}>ABTalks</span>
    </NavLink>
  );
}

export default function Navbar() {
  const [searchParams] = useSearchParams();
  const { profile, days } = getScenario(searchParams);
  const streak = computeCurrentStreak(days, profile.currentDay);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <BrandMark />

        <nav className={styles.links} aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : '')}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : '')}>
            Dashboard
          </NavLink>
          <NavLink
            to={`/day/${profile.currentDay}`}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Day {profile.currentDay}
          </NavLink>
        </nav>

        <div className={styles.right}>
          <span className={styles.streakPill} aria-label={`${streak} day streak`}>
            <Flame size={15} strokeWidth={2.5} aria-hidden="true" />
            {streak}
          </span>
          <NavLink to={`/day/${profile.currentDay}`} className={styles.cta}>
            Continue Day {profile.currentDay}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
