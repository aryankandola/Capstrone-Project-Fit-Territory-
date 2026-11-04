import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ActivityProvider from './context/ActivityProvider'
import AppLayout from './components/layout/AppLayout'
import DashboardPage from './pages/DashboardPage'
import {
  ActivityPage,
  CoachPage,
  ChallengesPage,
  ExercisesPage,
  LeaderboardPage,
  ProfilePage,
  RewardsPage,
  WalletPage,
  WorkoutsPage,
} from './pages/FeaturePages'
import ExplorePage from './pages/ExplorePage'

export default function App() {
  return (
    <BrowserRouter>
      <ActivityProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="explore" element={<ExplorePage />} />
            <Route path="activity" element={<ActivityPage />} />
            <Route path="workouts" element={<WorkoutsPage />} />
            <Route path="exercises" element={<ExercisesPage />} />
            <Route path="coach" element={<CoachPage />} />
            <Route path="leaderboard" element={<LeaderboardPage />} />
            <Route path="challenges" element={<ChallengesPage />} />
            <Route path="wallet" element={<WalletPage />} />
            <Route path="rewards" element={<RewardsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </ActivityProvider>
    </BrowserRouter>
  )
}
