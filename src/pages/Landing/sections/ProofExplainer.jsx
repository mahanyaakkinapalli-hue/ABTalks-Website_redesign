import { Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../../components/BrandIcons';
import styles from './ProofExplainer.module.css';

export default function ProofExplainer() {
  return (
    <section className={styles.section} aria-labelledby="proof-heading">
      <div className="container">
        <p className={styles.kicker}>Why proof matters</p>
        <h2 id="proof-heading" className={styles.heading}>
          Code isn't proof until someone else can see it
        </h2>
        <p className={styles.lead}>
          Every day on ABTalks ends the same way: push it, post it, protect your streak. That's
          what turns 60 days of practice into a portfolio.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={`${styles.iconWrap} ${styles.githubIcon}`}>
              <GithubIcon size={22} />
            </div>
            <h3 className={styles.cardTitle}>Push to GitHub</h3>
            <p className={styles.cardText}>
              Every build lives in a public repo. By Day 60 your GitHub profile shows a real,
              consistent commit history — not a resume claim, actual evidence.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.iconWrap} ${styles.linkedinIcon}`}>
              <LinkedinIcon size={22} />
            </div>
            <h3 className={styles.cardTitle}>Share on LinkedIn</h3>
            <p className={styles.cardText}>
              A short post on what you built and what you learned puts your progress in front of
              recruiters, seniors, and peers — before you've even applied anywhere.
            </p>
          </div>

          <div className={styles.card}>
            <div className={`${styles.iconWrap} ${styles.midnightIcon}`}>
              <Moon size={22} strokeWidth={2.1} aria-hidden="true" />
            </div>
            <h3 className={styles.cardTitle}>Protect your streak</h3>
            <p className={styles.cardText}>
              "Proof Before Midnight" shows exactly what's done and what's missing, every single
              day, so your streak never breaks by accident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
