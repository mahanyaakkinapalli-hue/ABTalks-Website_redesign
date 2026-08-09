import { ListChecks } from 'lucide-react';
import styles from './RequirementsChecklist.module.css';

export default function RequirementsChecklist({ requirements, checked, onToggle, interactive }) {
  const doneCount = checked.filter(Boolean).length;

  return (
    <section className={styles.card} aria-labelledby="requirements-heading">
      <div className={styles.headRow}>
        <div className={styles.headLeft}>
          <span className={styles.iconWrap} aria-hidden="true">
            <ListChecks size={16} strokeWidth={2.3} />
          </span>
          <h2 id="requirements-heading" className={styles.heading}>
            Requirements
          </h2>
        </div>
        <span className={styles.count}>
          {doneCount}/{requirements.length}
        </span>
      </div>

      <ul className={styles.list}>
        {requirements.map((req, i) => (
          <li key={req} className={styles.item}>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => onToggle(i)}
                disabled={!interactive}
                className={styles.checkbox}
              />
              <span className={checked[i] ? styles.textDone : undefined}>{req}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
