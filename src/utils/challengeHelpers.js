import { TOTAL_DAYS, achievementDefs } from '../data/mockData';

// A day counts toward a streak only once all three proof steps are done.
export function isDayFullyProofed(day) {
  return Boolean(day?.proof?.taskComplete && day?.proof?.githubUrl && day?.proof?.linkedinUrl);
}

export function getDayByNumber(days, dayNumber) {
  return days.find((d) => d.day === dayNumber) ?? null;
}

export function getCurrentDay(days, currentDayNumber) {
  return getDayByNumber(days, currentDayNumber);
}

// Consecutive fully-proofed days ending the day *before* today.
export function computeCurrentStreak(days, currentDayNumber) {
  let streak = 0;
  for (let d = currentDayNumber - 1; d >= 1; d -= 1) {
    const day = getDayByNumber(days, d);
    if (day && isDayFullyProofed(day)) streak += 1;
    else break;
  }
  return streak;
}

export function computeLongestStreak(days) {
  let longest = 0;
  let running = 0;
  days.forEach((day) => {
    if (isDayFullyProofed(day)) {
      running += 1;
      longest = Math.max(longest, running);
    } else {
      running = 0;
    }
  });
  return longest;
}

export function computeCompletedCount(days) {
  return days.filter((d) => d.status === 'completed').length;
}

export function computeMissedCount(days) {
  return days.filter((d) => d.status === 'missed').length;
}

export function computeOverallCompletion(days) {
  const completed = computeCompletedCount(days);
  return Math.round((completed / TOTAL_DAYS) * 100);
}

export function computeGithubProofCount(days) {
  return days.filter((d) => Boolean(d.proof?.githubUrl)).length;
}

export function computeLinkedinProofCount(days) {
  return days.filter((d) => Boolean(d.proof?.linkedinUrl)).length;
}

export function getProofItems(day) {
  return [
    { key: 'task', label: "Complete today's task", done: Boolean(day?.proof?.taskComplete) },
    { key: 'github', label: 'Push to GitHub', done: Boolean(day?.proof?.githubUrl) },
    { key: 'linkedin', label: 'Share on LinkedIn', done: Boolean(day?.proof?.linkedinUrl) },
  ];
}

export function computeProofSummary(day) {
  const items = getProofItems(day);
  const doneCount = items.filter((i) => i.done).length;
  return { items, doneCount, total: items.length, allDone: doneCount === items.length };
}

export function computeStats(days, currentDayNumber) {
  const currentStreak = computeCurrentStreak(days, currentDayNumber);
  const longestStreak = computeLongestStreak(days);
  const completedCount = computeCompletedCount(days);
  const missedCount = computeMissedCount(days);
  const githubProofCount = computeGithubProofCount(days);
  const linkedinProofCount = computeLinkedinProofCount(days);

  return {
    currentDay: currentDayNumber,
    currentStreak,
    longestStreak,
    completedCount,
    missedCount,
    hasMissedDay: missedCount > 0,
    overallCompletion: computeOverallCompletion(days),
    githubProofCount,
    linkedinProofCount,
    totalDays: TOTAL_DAYS,
  };
}

export function getAchievements(days, currentDayNumber) {
  const stats = computeStats(days, currentDayNumber);
  return achievementDefs.map((def) => ({
    id: def.id,
    title: def.title,
    description: def.description,
    icon: def.icon,
    unlocked: def.unlocked(stats),
  }));
}

export function isFirstDayNoStreak(currentDayNumber, currentStreak) {
  return currentDayNumber === 1 && currentStreak === 0;
}

export function greetingForHour(hour) {
  if (hour < 5) return 'Still up';
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  if (hour < 21) return 'Good evening';
  return 'Good night';
}
