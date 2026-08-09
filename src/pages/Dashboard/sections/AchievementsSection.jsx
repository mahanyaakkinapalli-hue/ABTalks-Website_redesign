import AchievementBadge from '../../../components/AchievementBadge';
import styles from './AchievementsSection.module.css';

export default function AchievementsSection({ achievements }) {
  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <section className={styles.section} aria-labelledby="achievements-heading">
      <div className={styles.head}>
        <h2 id="achievements-heading" className={styles.heading}>
          Achievements
        </h2>
        <span className={styles.count}>
          {unlockedCount}/{achievements.length} unlocked
        </span>
      </div>
      <div className={styles.grid}>
        {achievements.map((a) => (
          <AchievementBadge key={a.id} achievement={a} />
        ))}
      </div>
    </section>
  );
}
