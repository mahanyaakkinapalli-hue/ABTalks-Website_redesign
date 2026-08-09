import { User } from 'lucide-react';
import { greetingForHour } from '../../../utils/challengeHelpers';
import styles from './GreetingHeader.module.css';

export default function GreetingHeader({ profile, currentDay, isEmpty }) {
  const greeting = greetingForHour(new Date().getHours());
  const firstName = profile.name ? profile.name.split(' ')[0] : null;

  return (
    <div className={styles.header}>
      <div className={styles.avatar} aria-hidden="true">
        {profile.initials ? profile.initials : <User size={22} strokeWidth={2.2} />}
      </div>
      <div>
        {isEmpty ? (
          <>
            <h1 className={styles.title}>Welcome to ABTalks</h1>
            <p className={styles.subtitle}>
              Your profile is empty — finish Day 1 to start building your streak.
            </p>
          </>
        ) : (
          <>
            <h1 className={styles.title}>
              {greeting}, {firstName} 👋
            </h1>
            <p className={styles.subtitle}>
              Day {currentDay} of 60 · {profile.college}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
