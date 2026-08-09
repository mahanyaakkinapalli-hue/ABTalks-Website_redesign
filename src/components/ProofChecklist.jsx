import { CheckCircle2, Circle, Moon, PartyPopper, AlertTriangle, Clock } from 'lucide-react';
import useCountdownToMidnight from '../utils/useCountdownToMidnight';
import styles from './ProofChecklist.module.css';

export default function ProofChecklist({ items, doneCount, total, variant = 'full' }) {
  const allDone = doneCount === total;
  const atRisk = doneCount === 0;
  const { hours, minutes } = useCountdownToMidnight();
  const urgent = hours < 3;

  return (
    <div className={`${styles.card} ${variant === 'compact' ? styles.compact : ''}`}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.iconWrap} aria-hidden="true">
            <Moon size={16} strokeWidth={2.3} />
          </span>
          <h3 className={styles.title}>Proof Before Midnight</h3>
        </div>
        {allDone ? (
          <span className={`${styles.pill} ${styles.pillSuccess}`}>Streak secured</span>
        ) : atRisk ? (
          <span className={`${styles.pill} ${styles.pillDanger}`}>At risk</span>
        ) : (
          <span className={styles.pill}>In progress</span>
        )}
      </div>

      {!allDone && (
        <p className={`${styles.countdown} ${urgent ? styles.countdownUrgent : ''}`}>
          <Clock size={13} strokeWidth={2.3} aria-hidden="true" />
          {hours}h {minutes}m left today
        </p>
      )}

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.key} className={`${styles.item} ${item.done ? styles.itemDone : ''}`}>
            {item.done ? (
              <CheckCircle2 size={20} strokeWidth={2.2} className={styles.checkDone} aria-hidden="true" />
            ) : (
              <Circle size={20} strokeWidth={2.2} className={styles.checkPending} aria-hidden="true" />
            )}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{ width: `${(doneCount / total) * 100}%` }}
          />
        </div>
        <p className={styles.count}>
          <strong>
            {doneCount} of {total}
          </strong>{' '}
          complete
        </p>
      </div>

      {variant === 'full' && (
        <p className={`${styles.message} ${allDone ? styles.messageSuccess : styles.messageWarn}`}>
          {allDone ? (
            <>
              <PartyPopper size={16} strokeWidth={2.2} aria-hidden="true" /> You're done — your
              streak is protected for today.
            </>
          ) : (
            <>
              <AlertTriangle size={16} strokeWidth={2.2} aria-hidden="true" /> Finish the rest before
              midnight or your streak resets to zero.
            </>
          )}
        </p>
      )}
    </div>
  );
}
