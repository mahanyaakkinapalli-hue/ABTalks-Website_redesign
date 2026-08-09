import { useEffect, useState } from 'react';

function timeLeft() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diffMs = midnight - now;
  return {
    hours: Math.floor(diffMs / 3600000),
    minutes: Math.floor((diffMs % 3600000) / 60000),
  };
}

// Live countdown to local midnight, so "Proof Before Midnight" shows a real
// number of hours left rather than a vague deadline.
export default function useCountdownToMidnight() {
  const [time, setTime] = useState(timeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(timeLeft()), 60000);
    return () => clearInterval(id);
  }, []);

  return time;
}
