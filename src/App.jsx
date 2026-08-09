import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import LandingPage from './pages/Landing/LandingPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ChallengeDayPage from './pages/ChallengeDay/ChallengeDayPage';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/day/:dayId" element={<ChallengeDayPage />} />
      </Route>
    </Routes>
  );
}

export default App;
