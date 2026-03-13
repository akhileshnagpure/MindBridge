// Generated with Claude Code assistance
import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/layout/app-layout'
import DashboardPage from './app/dashboard/page'
import CheckInPage from './app/checkin/page'
import BookSessionPage from './app/book-session/page'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard"    element={<DashboardPage />} />
        <Route path="/checkin"      element={<CheckInPage />} />
        <Route path="/book-session" element={<BookSessionPage />} />
      </Route>
    </Routes>
  )
}
