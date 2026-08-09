import { CalendarCheck, FolderGit2, Users2, Award } from 'lucide-react';
import styles from './Benefits.module.css';

const benefits = [
  {
    icon: CalendarCheck,
    title: 'A habit, not a to-do list',
    description: 'Daily streaks make consistency automatic instead of relying on willpower.',
  },
  {
    icon: FolderGit2,
    title: '60 real projects',
    description: 'Walk away with a GitHub history full of small, finished, working builds.',
  },
  {
    icon: Users2,
    title: 'Visible to recruiters',
    description: 'Public proof means your progress is discoverable long before you apply anywhere.',
  },
  {
    icon: Award,
    title: 'Skills you can defend',
    description: 'Every build maps to a specific skill, so you can talk through your work in interviews.',
  },
];

export default function Benefits() {
  return (
    <section className={styles.section} aria-labelledby="benefits-heading">
      <div className="container">
        <p className={styles.kicker}>Why students stick with it</p>
        <h2 id="benefits-heading" className={styles.heading}>
          Built for the way college students actually learn
        </h2>

        <div className={styles.grid}>
          {benefits.map((b) => (
            <div key={b.title} className={styles.item}>
              <div className={styles.iconWrap}>
                <b.icon size={20} strokeWidth={2.2} aria-hidden="true" />
              </div>
              <h3 className={styles.itemTitle}>{b.title}</h3>
              <p className={styles.itemText}>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
