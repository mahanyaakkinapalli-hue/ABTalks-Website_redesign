import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import styles from './RootLayout.module.css';

export default function RootLayout() {
  return (
    <>
      <a href="#main-content" className="sr-only">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>
      <BottomNav />
    </>
  );
}
