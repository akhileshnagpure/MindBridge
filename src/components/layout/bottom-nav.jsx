// Generated with Claude Code assistance
import { Link, useLocation } from 'react-router-dom'
import { Home, ClipboardCheck, Activity, Users, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const mobileNav = [
  { label: 'Home',     icon: Home,           path: '/dashboard' },
  { label: 'Check-In', icon: ClipboardCheck, path: '/checkin' },
  { label: 'Journey',  icon: Activity,        path: '/dashboard' },
  { label: 'Sessions', icon: Users,           path: '/book-session' },
  { label: 'Settings', icon: Settings,         path: '#' },
]

export default function BottomNav() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background-card border-t border-border flex z-50">
      {mobileNav.map((item) => {
        const Icon = item.icon
        const isActive = location.pathname === item.path
        return (
          <Link
            key={item.label}
            to={item.path}
            aria-label={item.label}
            className={cn(
              'flex-1 flex flex-col items-center justify-center py-3 gap-1 text-[10px] font-bold transition-colors',
              isActive ? 'text-primary' : 'text-text-muted'
            )}
          >
            <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.8} />
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
