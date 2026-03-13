// Generated with Claude Code assistance
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import TopNav from './top-nav'
import BottomNav from './bottom-nav'

export default function AppLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Sidebar – hidden on mobile */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Bottom navigation – visible only on mobile */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  )
}
