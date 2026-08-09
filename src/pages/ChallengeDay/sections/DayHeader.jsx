import { Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DifficultyBadge, SkillTag } from '../../../components/Tags';
import styles from './DayHeader.module.css';

const STATUS_LABEL = {
  completed: { text: 'Completed', className: 'statusCompleted' },
  current: { text: "Today's Challenge", className: 'statusCurrent' },
  missed: { text: 'Missed', className: 'statusMissed' },
  upcoming: { text: 'Not Unlocked Yet', className: 'statusUpcoming' },
};

export default function DayHeader({ day }) {
  const status = STATUS_LABEL[day.status];

  return (
    <div className={styles.header}>
      <Link to="/dashboard" className={styles.back}>
        <ArrowLeft size={15} strokeWidth={2.3} aria-hidden="true" />
        Dashboard
      </Link>

      <div className={styles.topRow}>
        <span className={styles.dayLabel}>Day {day.day} of 60</span>
        <span className={`${styles.statusPill} ${styles[status.className]}`}>{status.text}</span>
      </div>

      <h1 className={styles.title}>{day.title}</h1>

      <div className={styles.metaRow}>
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
    </div>
  );
}
