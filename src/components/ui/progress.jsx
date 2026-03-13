// Generated with Claude Code assistance
import { cn } from '@/lib/utils'

export function Progress({ value = 0, className, variant = 'primary', label, showPct = true }) {
  const fillColor = {
    primary: 'bg-gradient-to-r from-primary to-primary-bright',
    success: 'bg-gradient-to-r from-success to-[#5BCCA0]',
    warning: 'bg-gradient-to-r from-warning to-[#F0C070]',
  }[variant]

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {(label || showPct) && (
        <div className="flex justify-between items-center">
          {label && <span className="text-[12px] font-bold text-text-secondary">{label}</span>}
          {showPct && <span className="text-[12px] font-extrabold text-primary">{value}%</span>}
        </div>
      )}
      <div className="h-2 rounded-full bg-background-soft border border-border overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all duration-500', fillColor)}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}
