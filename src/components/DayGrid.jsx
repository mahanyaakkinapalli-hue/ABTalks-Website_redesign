import { Link } from 'react-router-dom';
import { Check, X, Lock } from 'lucide-react';
import styles from './DayGrid.module.css';

const STATUS_ICON = { completed: Check, missed: X, upcoming: Lock };

export default function DayGrid({ days }) {
  return (
    <div className={styles.grid} role="list" aria-label="60-day challenge journey">
      {days.map((day) => {
        const Icon = STATUS_ICON[day.status];
        return (
          <Link
            key={day.day}
            to={`/day/${day.day}`}
            role="listitem"
            className={`${styles.cell} ${styles[day.status]}`}
            aria-label={`Day ${day.day}: ${day.title} — ${day.status}`}
            title={`Day ${day.day}: ${day.title}`}
          >
            {day.status === 'current' ? (
              <span className={styles.cellNumber}>{day.day}</span>
            ) : Icon ? (
              <Icon size={13} strokeWidth={3} aria-hidden="true" />
            ) : (
              <span className={styles.cellNumber}>{day.day}</span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
