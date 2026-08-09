import DayGrid from '../../../components/DayGrid';
import styles from './JourneySection.module.css';

const LEGEND = [
  { key: 'completed', label: 'Completed' },
  { key: 'current', label: 'Today' },
  { key: 'missed', label: 'Missed' },
  { key: 'upcoming', label: 'Upcoming' },
];

export default function JourneySection({ days }) {
  return (
    <section className={styles.section} aria-labelledby="journey-heading">
      <div className={styles.head}>
        <h2 id="journey-heading" className={styles.heading}>
          Your 60-day journey
        </h2>
        <div className={styles.legend}>
          {LEGEND.map((l) => (
            <span key={l.key} className={styles.legendItem}>
              <span className={`${styles.swatch} ${styles[l.key]}`} aria-hidden="true" />
              {l.label}
            </span>
          ))}
        </div>
      </div>
      <DayGrid days={days} />
    </section>
  );
}
