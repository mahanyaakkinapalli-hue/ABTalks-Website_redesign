import { Code2, Gauge, Rocket } from 'lucide-react';
import styles from './Tags.module.css';

export function SkillTag({ children }) {
  return (
    <span className={styles.skillTag}>
      <Code2 size={13} strokeWidth={2.3} aria-hidden="true" />
      {children}
    </span>
  );
}

const DIFFICULTY_STYLES = {
  Beginner: styles.beginner,
  Intermediate: styles.intermediate,
  Advanced: styles.advanced,
};

export function DifficultyBadge({ difficulty }) {
  const Icon = difficulty === 'Advanced' ? Rocket : Gauge;
  return (
    <span className={`${styles.difficulty} ${DIFFICULTY_STYLES[difficulty] ?? ''}`}>
      <Icon size={13} strokeWidth={2.3} aria-hidden="true" />
      {difficulty}
    </span>
  );
}
