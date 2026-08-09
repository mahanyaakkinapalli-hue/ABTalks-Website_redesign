import { NavLink, useSearchParams } from 'react-router-dom';
import { Home, LayoutDashboard, Target } from 'lucide-react';
import { getScenario } from '../utils/scenario';
import styles from './BottomNav.module.css';

export default function BottomNav() {
  const [searchParams] = useSearchParams();
  const { profile } = getScenario(searchParams);

  const items = [
    { to: '/', label: 'Home', icon: Home, end: true },
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: false },
    { to: `/day/${profile.currentDay}`, label: 'Today', icon: Target, end: false },
  ];

  return (
    <nav className={styles.bottomNav} aria-label="Primary">
      {items.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={label}
          to={to}
          end={end}
          className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
        >
          <Icon size={20} strokeWidth={2.2} aria-hidden="true" />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
