import { Clock, ArrowRight } from 'lucide-react';
import Button from '../../../components/Button';
import { SkillTag, DifficultyBadge } from '../../../components/Tags';
import { computeProofSummary } from '../../../utils/challengeHelpers';
import styles from './TodayTaskCard.module.css';

export default function TodayTaskCard({ day }) {
  if (!day) return null;
  const { allDone } = computeProofSummary(day);

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <span className={styles.kicker}>Today's challenge · Day {day.day}</span>
        {allDone && <span className={styles.donePill}>Done for today</span>}
      </div>

      <h2 className={styles.title}>{day.title}</h2>
      <p className={styles.mission}>{day.mission}</p>

      <div className={styles.meta}>
        <DifficultyBadge difficulty={day.difficulty} />
        <span className={styles.time}>
          <Clock size={13} strokeWidth={2.3} aria-hidden="true" />
          {day.estimatedTime}
        </span>
      </div>

      <div className={styles.skills}>
        {day.skills.map((s) => (
          <SkillTag key={s}>{s}</SkillTag>
        ))}
      </div>

      <Button to={`/day/${day.day}`} fullWidth icon={ArrowRight}>
        {allDone ? "Review Today's Build" : `Continue Day ${day.day}`}
      </Button>
    </div>
  );
}
