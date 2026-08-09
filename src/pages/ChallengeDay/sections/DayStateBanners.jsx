import { Link } from 'react-router-dom';
import { AlertTriangle, Lock, SearchX } from 'lucide-react';
import Button from '../../../components/Button';
import styles from './DayStateBanners.module.css';

export function DayNotFound({ currentDay }) {
  return (
    <div className={`container ${styles.wrap}`}>
      <div className={styles.card}>
        <SearchX size={30} strokeWidth={2} className={styles.icon} aria-hidden="true" />
        <h1 className={styles.title}>This day doesn't exist</h1>
        <p className={styles.text}>
          ABTalks runs for 60 days. Pick a day between 1 and 60, or jump back to today's
          challenge.
        </p>
        <Button to={`/day/${currentDay}`}>Go to Day {currentDay}</Button>
      </div>
    </div>
  );
}

export function MissedDayBanner({ day, currentDay }) {
  return (
    <div className={`${styles.banner} ${styles.bannerDanger}`}>
      <AlertTriangle size={20} strokeWidth={2.2} aria-hidden="true" />
      <div>
        <p className={styles.bannerTitle}>You missed Day {day.day}</p>
        <p className={styles.bannerText}>
          No proof was submitted before midnight, so this day broke the streak. It happens — the
          fastest way back is to nail today's challenge.
        </p>
        <Link to={`/day/${currentDay}`} className={styles.bannerLink}>
          Go to today's challenge (Day {currentDay}) →
        </Link>
      </div>
    </div>
  );
}

export function UpcomingDayBanner({ day, currentDay }) {
  return (
    <div className={`${styles.banner} ${styles.bannerNeutral}`}>
      <Lock size={20} strokeWidth={2.2} aria-hidden="true" />
      <div>
        <p className={styles.bannerTitle}>Day {day.day} hasn't unlocked yet</p>
        <p className={styles.bannerText}>
          Keep your streak alive to reach this one — it unlocks once you finish today's
          challenge.
        </p>
        <Link to={`/day/${currentDay}`} className={styles.bannerLink}>
          Go to today's challenge (Day {currentDay}) →
        </Link>
      </div>
    </div>
  );
}
