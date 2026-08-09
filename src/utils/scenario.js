import {
  profile,
  challengeDays,
  newUserProfile,
  newUserChallengeDays,
  emptyProfile,
  emptyChallengeDays,
} from '../data/mockData';

// Lets ?demo=new or ?demo=empty preview the required edge-case states
// (first day / no streak, and an empty profile) without any auth or
// backend — purely a query param swap over the same mock dataset.
export function getScenario(searchParams) {
  const demo = searchParams.get('demo');

  if (demo === 'new') return { profile: newUserProfile, days: newUserChallengeDays, isEmpty: false };
  if (demo === 'empty') return { profile: emptyProfile, days: emptyChallengeDays, isEmpty: true };

  return { profile, days: challengeDays, isEmpty: false };
}
