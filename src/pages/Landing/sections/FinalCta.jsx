import { ArrowRight } from 'lucide-react';
import Button from '../../../components/Button';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={styles.section} aria-labelledby="final-cta-heading">
      <div className={`container ${styles.inner}`}>
        <h2 id="final-cta-heading" className={styles.heading}>
          Your streak starts on Day 1. Why not today?
        </h2>
        <p className={styles.sub}>
          No signup, no setup, no excuses. Open your dashboard and see exactly what Day 1 looks
          like.
        </p>
        <Button to="/dashboard" size="lg" icon={ArrowRight}>
          Start the Challenge
        </Button>
      </div>
    </section>
  );
}
