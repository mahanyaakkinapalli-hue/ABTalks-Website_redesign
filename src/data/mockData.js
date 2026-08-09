// Realistic mock data for the ABTalks 60-day challenge.
// No backend / no database — everything below is static, hand-shaped demo data.

export const TOTAL_DAYS = 60;

export const profile = {
  name: 'Ananya Verma',
  initials: 'AV',
  college: 'SRM Institute of Science & Technology',
  branch: 'B.Tech CSE, 3rd Year',
  githubUsername: 'ananya-verma',
  githubConnected: true,
  linkedinConnected: true,
  joinedOn: '2026-07-29',
  currentDay: 12,
};

// Edge case: a real student on Day 1 who hasn't finished anything yet,
// so their streak is still zero.
export const newUserProfile = {
  name: 'Rahul Mehta',
  initials: 'RM',
  college: 'Manipal Institute of Technology',
  branch: 'B.Tech ECE, 1st Year',
  githubUsername: 'rahul-mehta',
  githubConnected: true,
  linkedinConnected: true,
  joinedOn: '2026-08-09',
  currentDay: 1,
};

// An intentionally bare-bones profile used to demonstrate the
// "empty profile" edge case (a student who created an account but
// hasn't connected anything or started Day 1 yet).
export const emptyProfile = {
  name: '',
  initials: '',
  college: '',
  branch: '',
  githubUsername: '',
  githubConnected: false,
  linkedinConnected: false,
  joinedOn: '2026-08-09',
  currentDay: 1,
};

const TOPICS = [
  { title: 'Dev Environment Setup & First Commit', category: 'foundations', skills: ['Git', 'GitHub', 'Command Line'] },
  { title: 'JavaScript Basics: Variables & Control Flow', category: 'foundations', skills: ['JavaScript'] },
  { title: 'Arrays & String Manipulation', category: 'foundations', skills: ['DSA', 'JavaScript'] },
  { title: 'Functions, Scope & Closures', category: 'foundations', skills: ['JavaScript'] },
  { title: 'Recursion Warm-up: Factorial & Fibonacci', category: 'foundations', skills: ['DSA', 'Recursion'] },
  { title: 'Two Pointers & Sliding Window', category: 'foundations', skills: ['DSA'] },
  { title: 'Sorting Algorithms Visualizer', category: 'web', skills: ['JavaScript', 'DOM'] },
  { title: 'Personal Portfolio Page v1', category: 'web', skills: ['HTML', 'CSS'] },
  { title: 'Responsive Layouts with Flexbox', category: 'web', skills: ['CSS'] },
  { title: 'CSS Grid Photo Gallery', category: 'web', skills: ['CSS'] },
  { title: 'Debounced Search Bar', category: 'web', skills: ['JavaScript', 'DOM', 'UX'] },
  { title: 'GitHub Profile Explorer', category: 'web', skills: ['JavaScript', 'Fetch API', 'DOM'] },
  { title: 'Weather Dashboard with Live Data', category: 'web', skills: ['JavaScript', 'Fetch API'] },
  { title: 'LocalStorage Notes App', category: 'web', skills: ['JavaScript', 'Web Storage'] },
  { title: 'Form Validation Toolkit', category: 'web', skills: ['JavaScript', 'UX'] },
  { title: 'Dark Mode Toggle & Theming', category: 'web', skills: ['CSS', 'JavaScript'] },
  { title: 'Animated Landing Page Hero', category: 'web', skills: ['CSS', 'Animation'] },
  { title: 'Todo App with Filters', category: 'web', skills: ['JavaScript', 'DOM'] },
  { title: 'Expense Tracker (Vanilla JS)', category: 'web', skills: ['JavaScript', 'LocalStorage'] },
  { title: 'Quiz App with Timer', category: 'web', skills: ['JavaScript', 'DOM'] },
  { title: 'React Basics: Components & Props', category: 'react', skills: ['React', 'JavaScript'] },
  { title: 'React State & Event Handling', category: 'react', skills: ['React'] },
  { title: 'React Counter & Todo Rebuild', category: 'react', skills: ['React'] },
  { title: 'useEffect & Data Fetching in React', category: 'react', skills: ['React', 'Hooks'] },
  { title: 'React Router: Multi-page App', category: 'react', skills: ['React', 'React Router'] },
  { title: 'Custom Hooks Deep Dive', category: 'react', skills: ['React', 'Hooks'] },
  { title: 'Context API: Theme & Auth Mock', category: 'react', skills: ['React', 'Context API'] },
  { title: 'Building a Reusable Component Library', category: 'react', skills: ['React', 'CSS'] },
  { title: 'React Forms & Validation', category: 'react', skills: ['React'] },
  { title: 'Halfway Capstone: Personal Dashboard App', category: 'react', skills: ['React', 'CSS', 'JavaScript'] },
  { title: 'Recharts: Data Visualization in React', category: 'react', skills: ['React', 'Recharts'] },
  { title: 'Infinite Scroll & Pagination', category: 'react', skills: ['React', 'UX'] },
  { title: 'React Performance: memo & useMemo', category: 'react', skills: ['React', 'Performance'] },
  { title: 'Testing React Components with Jest', category: 'react', skills: ['React', 'Testing'] },
  { title: 'Deploy a React App to Vercel', category: 'react', skills: ['React', 'Deployment'] },
  { title: 'Node.js & Express Fundamentals', category: 'backend', skills: ['Node.js', 'Express'] },
  { title: 'Building a REST API (Mock CRUD)', category: 'backend', skills: ['Node.js', 'REST API'] },
  { title: 'SQL Basics: SELECT, JOIN & Filters', category: 'backend', skills: ['SQL'] },
  { title: 'SQL Aggregations & Grouping', category: 'backend', skills: ['SQL'] },
  { title: 'Database Design: ER Diagrams', category: 'backend', skills: ['Database Design'] },
  { title: 'Authentication Flow (JWT Concepts)', category: 'backend', skills: ['Node.js', 'Security'] },
  { title: 'Building a URL Shortener', category: 'backend', skills: ['System Design', 'Node.js'] },
  { title: 'Rate Limiting & Caching Basics', category: 'backend', skills: ['System Design'] },
  { title: 'Docker Basics: Containerize an App', category: 'backend', skills: ['Docker', 'DevOps'] },
  { title: 'CI/CD Pipeline Basics', category: 'backend', skills: ['DevOps', 'GitHub Actions'] },
  { title: 'Graph Algorithms: BFS & DFS', category: 'backend', skills: ['DSA', 'Graphs'] },
  { title: 'Dynamic Programming Introduction', category: 'backend', skills: ['DSA', 'DP'] },
  { title: 'Trees & Binary Search Trees', category: 'backend', skills: ['DSA', 'Trees'] },
  { title: 'Hash Maps & Frequency Problems', category: 'backend', skills: ['DSA', 'Hashing'] },
  { title: 'Mock Technical Interview: Arrays & Strings', category: 'backend', skills: ['Interview Prep', 'DSA'] },
  { title: 'Open Source: Find & Read a Real Codebase', category: 'capstone', skills: ['Open Source', 'Git'] },
  { title: 'Open Source: Submit Your First PR', category: 'capstone', skills: ['Open Source', 'Git'] },
  { title: 'Capstone Planning: Pick Your Project', category: 'capstone', skills: ['Planning', 'Product Thinking'] },
  { title: 'Capstone Build: Core Feature', category: 'capstone', skills: ['Full-Stack', 'JavaScript'] },
  { title: 'Capstone Build: Styling & Polish', category: 'capstone', skills: ['CSS', 'UX'] },
  { title: 'Capstone Build: API Integration', category: 'capstone', skills: ['JavaScript', 'API'] },
  { title: 'Capstone Build: Testing & Bug Fixes', category: 'capstone', skills: ['Testing', 'Debugging'] },
  { title: 'Capstone Deployment Day', category: 'capstone', skills: ['Deployment', 'DevOps'] },
  { title: 'Resume & LinkedIn Profile Overhaul', category: 'capstone', skills: ['Career', 'Personal Branding'] },
  { title: 'Ship It: Final Showcase & Reflection', category: 'capstone', skills: ['Storytelling', 'Reflection'] },
];

const MISSION_TEMPLATES = {
  foundations: (title) =>
    `Sharpen your fundamentals with "${title}". Small, focused reps like this compound fast over 60 days.`,
  web: (title) =>
    `Build "${title}" — a small, real project you can actually show off on your portfolio.`,
  react: (title) => `Level up your React skills with "${title}".`,
  backend: (title) => `Go beyond the frontend today with "${title}".`,
  capstone: (title) => `"${title}" — bring everything you've learned so far together.`,
};

const REQUIREMENT_TEMPLATES = {
  foundations: (title) => [
    `Write working code for "${title}" from scratch — no copy-pasting`,
    'Add comments explaining your approach for the tricky parts',
    'Test your solution against at least 3 different inputs, including edge cases',
    'Commit your code to GitHub with a clear commit message',
  ],
  web: (title, skills) => [
    `Build a working version of "${title}" using ${skills[0]}`,
    'Make the layout fully responsive from 320px up to desktop',
    'Handle at least one edge case gracefully (empty state, error, etc.)',
    'Push the project to GitHub and note a live demo link if you deploy it',
  ],
  react: (title) => [
    `Implement "${title}" using functional components and hooks`,
    'Keep components small, reusable, and cleanly organized',
    'Manage state correctly and avoid unnecessary re-renders',
    'Push your code to GitHub with a short README explaining your approach',
  ],
  backend: (title) => [
    `Implement the core logic behind "${title}"`,
    'Write clean, well-structured code with proper error handling',
    'Document your approach and any assumptions in a README',
    'Push your work to GitHub with a descriptive commit',
  ],
  capstone: (title) => [
    `Make real, visible progress on "${title}"`,
    'Keep your code and commits clean and easy to follow',
    'Reflect on what you learned in your commit message or README',
    'Push your progress to GitHub before the day ends',
  ],
};

function metaForDay(day) {
  if (day <= 15) return { difficulty: 'Beginner', estimatedTime: '30–45 min' };
  if (day <= 35) return { difficulty: 'Intermediate', estimatedTime: '45–75 min' };
  if (day <= 50) return { difficulty: 'Advanced', estimatedTime: '75–110 min' };
  return { difficulty: 'Advanced', estimatedTime: '90–120 min' };
}

function githubUrlFor(day) {
  const dd = String(day).padStart(2, '0');
  return `https://github.com/ananya-verma/60-days-of-code/tree/main/day-${dd}`;
}

function linkedinUrlFor(day) {
  const dd = String(day).padStart(2, '0');
  return `https://www.linkedin.com/posts/ananya-verma_60daysofcode-day${dd}-buildinpublic-activity`;
}

// Hand-crafted overrides for the days that matter most to the demo:
// Day 1 (first ever day), Day 5 (missed day), Day 11 (yesterday),
// and Day 12 (today — the required /day/12 route).
const OVERRIDES = {
  1: {
    mission:
      'Set up your coding environment and make your very first commit. Every 60-day journey starts with one small, real step.',
    requirements: [
      "Install a code editor (VS Code) and Git on your machine",
      "Create a public GitHub repository named '60-days-of-code'",
      'Write a short README describing your goals for the challenge',
      'Make your first commit and push it to GitHub',
    ],
    difficulty: 'Beginner',
    estimatedTime: '20–30 min',
  },
  5: {
    mission:
      'Practice recursive thinking by implementing factorial and Fibonacci from scratch, then compare recursive vs. iterative approaches.',
    requirements: [
      'Implement factorial(n) using recursion',
      'Implement fibonacci(n) using recursion and memoization',
      'Compare the time complexity of your recursive vs. iterative solutions',
      'Push your solution and notes to GitHub',
    ],
    difficulty: 'Beginner',
    estimatedTime: '30–40 min',
  },
  11: {
    mission:
      'Build a search input that debounces user typing to avoid firing a search on every keystroke — a real-world UX and performance pattern.',
    requirements: [
      'Build an input field that filters a list of at least 20 mock items',
      'Debounce the filtering logic by 300–500ms',
      "Show a 'no results found' state when nothing matches",
      'Push your code to GitHub with a short explanation of debouncing',
    ],
    difficulty: 'Intermediate',
    estimatedTime: '40–50 min',
  },
  12: {
    mission:
      "Build a small web app that takes a GitHub username and displays their public profile card — avatar, bio, followers, and top repositories — using the public GitHub REST API.",
    requirements: [
      "Fetch and display the user's avatar, name, bio, and follower/following counts",
      "List at least 5 of the user's public repositories, sorted by stars",
      "Handle the 'user not found' case gracefully with a friendly error message",
      'Make the layout fully responsive from 320px up to desktop',
    ],
    difficulty: 'Intermediate',
    estimatedTime: '45–60 min',
  },
};

// status: 'completed' | 'missed' | 'current' | 'upcoming'
function buildDays({ currentDay, missedDays = [], startFromScratch = false }) {
  return TOPICS.map((topic, idx) => {
    const day = idx + 1;
    const meta = metaForDay(day);
    const override = OVERRIDES[day];
    const mission = override?.mission ?? MISSION_TEMPLATES[topic.category](topic.title);
    const requirements =
      override?.requirements ?? REQUIREMENT_TEMPLATES[topic.category](topic.title, topic.skills);

    let status = 'upcoming';
    if (!startFromScratch) {
      if (day < currentDay) status = missedDays.includes(day) ? 'missed' : 'completed';
      else if (day === currentDay) status = 'current';
    } else if (day === currentDay) {
      status = 'current';
    }

    const isFullyProofed = status === 'completed';
    const isTodayInProgress = status === 'current' && day === 12; // demo: today's task already coded

    return {
      day,
      title: topic.title,
      category: topic.category,
      skills: topic.skills,
      mission,
      requirements,
      difficulty: override?.difficulty ?? meta.difficulty,
      estimatedTime: override?.estimatedTime ?? meta.estimatedTime,
      status,
      proof: {
        taskComplete: isFullyProofed || isTodayInProgress,
        githubUrl: isFullyProofed || isTodayInProgress ? githubUrlFor(day) : null,
        linkedinUrl: isFullyProofed ? linkedinUrlFor(day) : null,
      },
    };
  });
}

// --- Main scenario: active student, Day 12 of 60 --------------------------
// Days 1-11 completed except Day 5 (missed) -> current streak of 6 days
// (Day 6 through Day 11), today (Day 12) has task + GitHub done, LinkedIn
// still pending — matches the "Proof Before Midnight" example exactly.
export const challengeDays = buildDays({ currentDay: 12, missedDays: [5] });

// --- Edge case scenario: first day, no streak yet --------------------------
export const newUserChallengeDays = buildDays({ currentDay: 1, startFromScratch: true });

// --- Edge case scenario: empty profile, nothing started --------------------
export const emptyChallengeDays = buildDays({ currentDay: 1, startFromScratch: true }).map(
  (d) => ({ ...d, proof: { taskComplete: false, githubUrl: null, linkedinUrl: null } })
);

export const achievementDefs = [
  {
    id: 'first-step',
    title: 'First Step',
    description: 'Completed Day 1 of the challenge',
    icon: 'Rocket',
    unlocked: (stats) => stats.completedCount >= 1,
  },
  {
    id: 'momentum',
    title: 'Momentum Builder',
    description: 'Hit a 5-day streak',
    icon: 'Flame',
    unlocked: (stats) => stats.longestStreak >= 5,
  },
  {
    id: 'comeback',
    title: 'Comeback Kid',
    description: 'Bounced back strong after a missed day',
    icon: 'TrendingUp',
    unlocked: (stats) => stats.hasMissedDay && stats.currentStreak >= 3,
  },
  {
    id: 'github-regular',
    title: 'GitHub Regular',
    description: 'Pushed proof to GitHub 10 times',
    icon: 'Github',
    unlocked: (stats) => stats.githubProofCount >= 10,
  },
  {
    id: 'linkedin-voice',
    title: 'LinkedIn Voice',
    description: 'Shared progress on LinkedIn 10 times',
    icon: 'Linkedin',
    unlocked: (stats) => stats.linkedinProofCount >= 10,
  },
  {
    id: 'halfway-hero',
    title: 'Halfway Hero',
    description: 'Reach Day 30 of the challenge',
    icon: 'Flag',
    unlocked: (stats) => stats.currentDay >= 30,
  },
  {
    id: 'finisher',
    title: 'The Finisher',
    description: 'Complete all 60 days',
    icon: 'Trophy',
    unlocked: (stats) => stats.completedCount >= 60,
  },
];

export const testimonials = [
  {
    name: 'Priya Nair',
    role: '3rd Year, IT — VIT Vellore',
    quote:
      "I used to start projects and abandon them in two days. ABTalks' streak pressure is the only thing that's ever made me finish 60 days straight.",
  },
  {
    name: 'Karthik Reddy',
    role: 'Final Year, CSE — CBIT Hyderabad',
    quote:
      'Three recruiters messaged me on LinkedIn during my challenge because they could literally see 40 days of real commits and posts.',
  },
  {
    name: 'Simran Kaur',
    role: '2nd Year, ECE — Thapar Institute',
    quote:
      "The daily proof step sounds small but it's the whole product. Building in private never held me accountable — building in public did.",
  },
];

export const stats = {
  activeStudents: '12,400+',
  buildsShipped: '410,000+',
  avgCompletionRate: '68%',
  collegesRepresented: '540+',
};
