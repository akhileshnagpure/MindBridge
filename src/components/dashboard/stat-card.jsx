// Generated with Claude Code assistance
import { Activity, Timer, Flame } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const iconMap = { Activity, Timer, Flame }

const colorMap = {
  teal:  { icon: 'bg-primary-soft text-primary',  delta: 'text-success' },
  green: { icon: 'bg-success-soft text-success',   delta: 'text-success' },
  amber: { icon: 'bg-warning-soft text-warning',   delta: 'text-warning' },
}

export default function StatCard({ stat }) {
  const Icon = iconMap[stat.icon] || Activity
  const colors = colorMap[stat.color] || colorMap.teal

  return (
    <Card className="flex items-center gap-4 px-5 py-4">
      {/* Icon */}
      <div className={cn('w-12 h-12 rounded-[8px] flex items-center justify-center flex-shrink-0', colors.icon)}>
        <Icon className="w-5 h-5" strokeWidth={1.8} />
      </div>

      {/* Text */}
      <div>
        <p className="text-[11px] font-bold text-text-muted uppercase tracking-[0.4px]">
          {stat.title}
        </p>
        <p className="text-[22px] font-extrabold text-text-primary leading-tight tracking-tight mt-0.5">
          {stat.value}
          <span className="text-[14px] font-semibold text-text-secondary ml-1">{stat.unit}</span>
        </p>
        <p className={cn('text-[12px] font-semibold mt-0.5', colors.delta)}>
          {stat.delta}
        </p>
      </div>
    </Card>
  )
}
