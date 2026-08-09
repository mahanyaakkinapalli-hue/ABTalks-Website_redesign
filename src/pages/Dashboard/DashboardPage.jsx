import { useSearchParams } from 'react-router-dom';
import { getScenario } from '../../utils/scenario';
import { computeStats, getAchievements, getCurrentDay } from '../../utils/challengeHelpers';
import GreetingHeader from './sections/GreetingHeader';
import StreakOverview from './sections/StreakOverview';
import TodayTaskCard from './sections/TodayTaskCard';
import JourneySection from './sections/JourneySection';
import AchievementsSection from './sections/AchievementsSection';
import ProofStatusSection from './sections/ProofStatusSection';
import ScenarioPreviewLinks from './sections/ScenarioPreviewLinks';
import styles from './DashboardPage.module.css';

export default function DashboardPage() {
  const [searchParams] = useSearchParams();
  const { profile, days, isEmpty } = getScenario(searchParams);

  const stats = computeStats(days, profile.currentDay);
  const achievements = getAchievements(days, profile.currentDay);
  const today = getCurrentDay(days, profile.currentDay);

  return (
    <div className={`container ${styles.page}`}>
      <GreetingHeader profile={profile} currentDay={profile.currentDay} isEmpty={isEmpty} />
      <StreakOverview stats={stats} />
      <TodayTaskCard day={today} />
      <ProofStatusSection profile={profile} today={today} stats={stats} />
      <JourneySection days={days} />
      <AchievementsSection achievements={achievements} />
      <ScenarioPreviewLinks current={searchParams.get('demo')} />
    </div>
  );
}
