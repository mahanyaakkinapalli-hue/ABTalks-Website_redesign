import styles from './ProgressRing.module.css';

export default function ProgressRing({
  percentage,
  size = 120,
  strokeWidth = 10,
  label,
  sublabel,
  color = 'var(--accent-hover)',
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(100, Math.max(0, percentage));
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div
      className={styles.wrap}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${sublabel ?? 'Progress'}: ${clamped}%`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--bg-elevated-2)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className={styles.progress}
        />
      </svg>
      <div className={styles.center} aria-hidden="true">
        <span className={styles.value}>{clamped}%</span>
        {label && <span className={styles.label}>{label}</span>}
      </div>
    </div>
  );
}
