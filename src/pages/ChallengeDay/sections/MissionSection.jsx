import { Target, Sparkles } from 'lucide-react';
import styles from './MissionSection.module.css';

export default function MissionSection({ mission, preview = false }) {
  return (
    <section className={`${styles.card} ${preview ? styles.preview : ''}`} aria-labelledby="mission-heading">
      <div className={styles.headRow}>
        <span className={styles.iconWrap} aria-hidden="true">
          {preview ? <Sparkles size={16} strokeWidth={2.3} /> : <Target size={16} strokeWidth={2.3} />}
        </span>
        <h2 id="mission-heading" className={styles.heading}>
          {preview ? 'Sneak peek' : 'Your mission'}
        </h2>
      </div>
      <p className={styles.text}>{mission}</p>
    </section>
  );
}
