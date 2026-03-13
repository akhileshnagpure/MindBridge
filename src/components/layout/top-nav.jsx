// Generated with Claude Code assistance
import { useLocation } from 'react-router-dom'
import { Bell, Search, ChevronDown } from 'lucide-react'
import { userProfile } from '@/data/data'

// Map path → page title + breadcrumb
const pageMeta = {
  '/dashboard':    { title: 'Wellness Dashboard',        crumb: 'Portal' },
  '/checkin':      { title: 'Daily Check-In',            crumb: 'Portal' },
  '/book-session': { title: 'Therapist Session Booking', crumb: 'Sessions' },
}

export default function TopNav() {
  const location = useLocation()
  const meta = pageMeta[location.pathname] || { title: 'MindBridge', crumb: 'Portal' }

  return (
    <header className="h-[72px] bg-background-card border-b border-border flex items-center justify-between px-6 md:px-10 flex-shrink-0">
      {/* Left – page title */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-text-muted">
          {meta.crumb}
          <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
          <span className="text-primary">{meta.title}</span>
        </div>
        <h1 className="text-[20px] font-extrabold text-text-primary tracking-tight leading-none">
          {meta.title}
        </h1>
      </div>

      {/* Right – actions + profile */}
      <div className="flex items-center gap-3">
        {/* Notification bell */}
        <button
          aria-label="Notifications"
          className="relative w-10 h-10 rounded-[8px] border border-border flex items-center justify-center text-text-secondary hover:bg-primary-soft hover:border-primary hover:text-primary transition-colors"
        >
          <Bell className="w-[18px] h-[18px]" strokeWidth={1.8} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-warning rounded-full border-2 border-white" />
        </button>

        {/* Search */}
        <button
          aria-label="Search"
          className="hidden sm:flex w-10 h-10 rounded-[8px] border border-border items-center justify-center text-text-secondary hover:bg-primary-soft hover:border-primary hover:text-primary transition-colors"
        >
          <Search className="w-[17px] h-[17px]" strokeWidth={1.8} />
        </button>

        {/* Profile pill */}
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-[12px] border border-border bg-background hover:border-primary hover:bg-primary-soft transition-colors cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#A8D8CF] to-primary flex items-center justify-center text-[13px] font-extrabold text-white flex-shrink-0">
            {userProfile.avatar}
          </div>
          <div className="hidden sm:block">
            <p className="text-[13px] font-bold text-text-primary leading-none">{userProfile.name}</p>
            <p className="text-[11px] text-text-muted mt-0.5">{userProfile.email}</p>
          </div>
          <ChevronDown className="w-4 h-4 text-text-muted hidden sm:block" />
        </div>
      </div>
    </header>
  )
}
