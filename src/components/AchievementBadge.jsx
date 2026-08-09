import { Rocket, Flame, TrendingUp, Flag, Trophy, Lock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import styles from './AchievementBadge.module.css';

const ICONS = { Rocket, Flame, TrendingUp, Github: GithubIcon, Linkedin: LinkedinIcon, Flag, Trophy };

export default function AchievementBadge({ achievement }) {
  const Icon = ICONS[achievement.icon] ?? Trophy;

  return (
    <div className={`${styles.badge} ${achievement.unlocked ? styles.unlocked : styles.locked}`}>
      <div className={styles.iconWrap}>
        {achievement.unlocked ? (
          <Icon size={22} aria-hidden="true" />
        ) : (
          <Lock size={18} strokeWidth={2.2} aria-hidden="true" />
        )}
      </div>
      <p className={styles.title}>{achievement.title}</p>
      <p className={styles.description}>{achievement.description}</p>
    </div>
  );
}
