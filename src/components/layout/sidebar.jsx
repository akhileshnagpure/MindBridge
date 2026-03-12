// Generated with Claude Code assistance
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Home, ClipboardCheck, Activity, Users, Settings,
  ChevronLeft, ChevronRight, Heart, MoreHorizontal
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems } from '@/data/data'
import { userProfile } from '@/data/data'

// Map icon string names to Lucide components
const iconMap = {
  Home, ClipboardCheck, Activity, Users, Settings,
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  return (
    <aside
      className={cn(
        'flex flex-col h-full bg-background-card border-r border-border transition-all duration-300',
        collapsed ? 'w-[72px]' : 'w-[240px]'
      )}
    >
      {/* Logo */}
      <div className={cn(
        'flex items-center gap-3 border-b border-border',
        collapsed ? 'justify-center p-4' : 'px-6 py-[22px]'
      )}>
        <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0">
          <Heart className="w-4 h-4 text-white" strokeWidth={2} />
        </div>
        {!collapsed && (
          <span className="text-[16px] font-extrabold text-text-primary tracking-tight">
            Mind<span className="text-primary">Bridge</span>
          </span>
        )}
      </div>

      {/* Navigation items */}
      <nav className="flex-1 flex flex-col gap-1 p-3">
        {!collapsed && (
          <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-3 py-2">
            Main
          </p>
        )}

        {navItems.slice(0, 4).map((item) => {
          const Icon = iconMap[item.icon] || Home
          const isActive = location.pathname === item.path

          return (
            <Link
              key={item.id}
              to={item.path}
              aria-label={item.label}
              className={cn(
                'flex items-center gap-3 rounded-[8px] transition-colors',
                collapsed ? 'justify-center p-3' : 'px-3 py-[10px]',
                isActive
                  ? 'bg-primary-soft text-primary font-bold'
                  : 'text-text-secondary font-semibold hover:bg-primary-soft hover:text-primary'
              )}
            >
              <Icon className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.8} />
              {!collapsed && (
                <span className="text-[14px]">{item.label}</span>
              )}
              {!collapsed && item.badge && (
                <span className="ml-auto text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}

        {!collapsed && (
          <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-3 py-2 mt-2">
            Account
          </p>
        )}

        {/* Settings */}
        <Link
          to="#"
          aria-label="Settings"
          className={cn(
            'flex items-center gap-3 rounded-[8px] text-text-secondary font-semibold transition-colors hover:bg-primary-soft hover:text-primary',
            collapsed ? 'justify-center p-3' : 'px-3 py-[10px]'
          )}
        >
          <Settings className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.8} />
          {!collapsed && <span className="text-[14px]">Settings</span>}
        </Link>
      </nav>

      {/* Footer user + collapse toggle */}
      <div className="border-t border-border">
        {/* Collapse button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className={cn(
            'w-full flex items-center gap-2 py-3 text-text-muted text-[11px] font-bold transition-colors hover:bg-primary-soft hover:text-primary',
            collapsed ? 'justify-center px-3' : 'px-4'
          )}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4" />
              Collapse
            </>
          )}
        </button>

        {/* User info */}
        {!collapsed && (
          <div className="flex items-center gap-2 px-3 pb-4 pt-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A8D8CF] to-primary flex items-center justify-center text-[11px] font-extrabold text-white flex-shrink-0">
              {userProfile.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-bold text-text-primary truncate">{userProfile.name}</p>
              <p className="text-[11px] text-text-muted">{userProfile.role}</p>
            </div>
            <MoreHorizontal className="w-4 h-4 text-text-muted flex-shrink-0" />
          </div>
        )}
      </div>
    </aside>
  )
}
