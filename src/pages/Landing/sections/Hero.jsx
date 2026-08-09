import { ArrowRight, Sparkles, Flame } from 'lucide-react';
import Button from '../../../components/Button';
import { stats } from '../../../data/mockData';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>
          <Sparkles size={14} strokeWidth={2.3} aria-hidden="true" />
          Built for Indian college students
        </span>

        <h1 className={styles.headline}>
          60 days. 60 builds.
          <br />
          <span className={styles.headlineAccent}>One stronger you.</span>
        </h1>

        <p className={styles.subhead}>
          ABTalks turns "I should learn to code" into a daily habit. Ship one small build a day,
          prove it on GitHub and LinkedIn, and walk away with 60 real projects and a streak you
          can show off.
        </p>

        <div className={styles.ctaRow}>
          <Button to="/dashboard" size="lg" icon={ArrowRight}>
            Start the Challenge
          </Button>
          <Button to="/day/12" variant="secondary" size="lg">
            Preview a Challenge Day
          </Button>
        </div>

        <p className={styles.microtrust}>
          Joined by {stats.activeStudents} students across {stats.collegesRepresented} colleges — no
          signup required to explore.
        </p>

        <div className={styles.previewCard} aria-hidden="true">
          <div className={styles.previewHead}>
            <span className={styles.previewDay}>Day 12 of 60</span>
            <span className={styles.previewStreak}>
              <Flame size={14} strokeWidth={2.5} />6 day streak
            </span>
          </div>
          <div className={styles.previewBar}>
            <div className={styles.previewFill} />
          </div>
          <p className={styles.previewFoot}>2 of 3 proof steps complete — build the habit daily.</p>
        </div>
      </div>
    </section>
  );
}
