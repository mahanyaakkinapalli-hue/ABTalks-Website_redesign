import { Flame } from 'lucide-react';
import styles from './StreakBadge.module.css';

export default function StreakBadge({ streak, size = 'md' }) {
  const noStreak = streak === 0;

  return (
    <div className={`${styles.badge} ${styles[size]} ${noStreak ? styles.empty : ''}`}>
      <div className={styles.iconWrap}>
        <Flame size={size === 'lg' ? 28 : 20} strokeWidth={2.3} aria-hidden="true" />
      </div>
      <div>
        {noStreak ? (
          <>
            <p className={styles.count}>No streak yet</p>
            <p className={styles.caption}>Finish today to light your first flame</p>
          </>
        ) : (
          <>
            <p className={styles.count}>
              {streak} <span>day{streak === 1 ? '' : 's'}</span>
            </p>
            <p className={styles.caption}>Current streak</p>
          </>
        )}
      </div>
    </div>
  );
}
