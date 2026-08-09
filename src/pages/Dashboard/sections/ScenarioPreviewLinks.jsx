import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import styles from './ScenarioPreviewLinks.module.css';

const SCENARIOS = [
  { demo: null, label: 'Day 12 — active streak' },
  { demo: 'new', label: 'Day 1 — no streak yet' },
  { demo: 'empty', label: 'Empty profile' },
];

export default function ScenarioPreviewLinks({ current }) {
  return (
    <section className={styles.wrap} aria-label="Preview other account states">
      <p className={styles.heading}>
        <Sparkles size={13} strokeWidth={2.3} aria-hidden="true" />
        This is mocked data — preview other student states
      </p>
      <div className={styles.links}>
        {SCENARIOS.map((s) => (
          <Link
            key={s.label}
            to={s.demo ? `/dashboard?demo=${s.demo}` : '/dashboard'}
            className={`${styles.link} ${current === s.demo ? styles.active : ''}`}
            aria-current={current === s.demo ? 'true' : undefined}
          >
            {s.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
