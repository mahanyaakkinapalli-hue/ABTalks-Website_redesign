import { Hammer, ShieldCheck, TrendingUp } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    icon: Hammer,
    title: 'Build',
    description:
      'Every day unlocks one focused coding challenge — a real script, app, or feature you can finish in under two hours.',
  },
  {
    icon: ShieldCheck,
    title: 'Prove',
    description:
      "Push your code to GitHub and share it on LinkedIn. Proof isn't optional — it's what turns practice into a public track record.",
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description:
      'Watch your streak, your skills, and your portfolio compound. After 60 days you have 60 shipped builds recruiters can actually see.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-heading">
      <div className="container">
        <p className={styles.kicker}>How it works</p>
        <h2 id="how-heading" className={styles.heading}>
          Three steps, repeated for 60 days
        </h2>

        <ol className={styles.steps}>
          {steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <div className={styles.stepTop}>
                <span className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.stepIcon}>
                  <step.icon size={22} strokeWidth={2.2} aria-hidden="true" />
                </div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
