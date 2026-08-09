import { Quote } from 'lucide-react';
import { stats, testimonials } from '../../../data/mockData';
import styles from './TrustBar.module.css';

const STAT_ITEMS = [
  { value: stats.activeStudents, label: 'Active students' },
  { value: stats.buildsShipped, label: 'Builds shipped' },
  { value: stats.avgCompletionRate, label: 'Avg. completion rate' },
  { value: stats.collegesRepresented, label: 'Colleges represented' },
];

export default function TrustBar() {
  return (
    <section className={styles.section} aria-labelledby="trust-heading">
      <div className="container">
        <h2 id="trust-heading" className="sr-only">
          Trusted by students across India
        </h2>
        <div className={styles.statsGrid}>
          {STAT_ITEMS.map((item) => (
            <div key={item.label} className={styles.stat}>
              <p className={styles.statValue}>{item.value}</p>
              <p className={styles.statLabel}>{item.label}</p>
            </div>
          ))}
        </div>

        <div className={styles.testimonials}>
          {testimonials.map((t) => (
            <figure key={t.name} className={styles.card}>
              <Quote size={22} strokeWidth={2} className={styles.quoteIcon} aria-hidden="true" />
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <figcaption>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
