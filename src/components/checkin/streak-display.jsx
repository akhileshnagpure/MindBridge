// Generated with Claude Code assistance
import { Flame } from 'lucide-react'
import { userProfile } from '@/data/data'

export default function StreakDisplay() {
  const nextMilestone = 21
  const pct = Math.round((userProfile.streak / nextMilestone) * 100)

  return (
    <div className="bg-gradient-to-br from-primary-soft to-[#D4EEE9] rounded-[12px] border border-primary/20 p-6 shadow-card">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-[13px] font-bold text-text-secondary">Current Check-In Streak</p>
        <div className="w-10 h-10 bg-success-soft rounded-[10px] flex items-center justify-center">
          <Flame className="w-5 h-5 text-success" strokeWidth={1.8} />
        </div>
      </div>

      {/* Value */}
      <div className="flex items-baseline gap-1.5 mb-3">
        <span className="text-[48px] font-extrabold text-text-primary leading-none tracking-tight">
          {userProfile.streak}
        </span>
        <span className="text-[18px] font-bold text-text-secondary">Days</span>
      </div>

      {/* Progress to next milestone */}
      <p className="text-[12px] font-semibold text-text-secondary mb-2">
        Next milestone: {nextMilestone} days
      </p>
      <div className="h-1.5 bg-primary/15 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-success transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
