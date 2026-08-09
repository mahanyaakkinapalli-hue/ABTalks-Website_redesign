import StreakBadge from '../../../components/StreakBadge';
import ProgressRing from '../../../components/ProgressRing';
import styles from './StreakOverview.module.css';

export default function StreakOverview({ stats }) {
  return (
    <div className={styles.card}>
      <StreakBadge streak={stats.currentStreak} size="lg" />
      <div className={styles.divider} aria-hidden="true" />
      <ProgressRing
        percentage={stats.overallCompletion}
        label="Complete"
        sublabel="Overall completion"
        size={104}
        strokeWidth={9}
      />
    </div>
  );
}
