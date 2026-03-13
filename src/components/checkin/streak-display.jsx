// Generated with Claude Code assistance
import { Flame } from 'lucide-react'
import { userProfile } from '@/data/data'

export default function StreakDisplay() {
  const nextMilestone = 21
  const pct = Math.round((userProfile.streak / nextMilestone) * 100)

  return (
    <div className="bg-green-50 border-[0.8px] border-green-200 rounded-[16px] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-[13px] font-bold text-text-secondary">Current Check-In Streak</p>
        <div className="w-9 h-9 bg-[#dcfce7] rounded-[10px] flex items-center justify-center">
          <Flame className="w-[18px] h-[18px] text-success" strokeWidth={1.8} />
        </div>
      </div>

      {/* Value */}
      <div className="flex items-baseline gap-1.5 mb-3">
        <span className="text-3xl font-bold text-text-primary leading-none">
          {userProfile.streak}
        </span>
        <span className="text-[16px] font-bold text-text-secondary">Days</span>
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
