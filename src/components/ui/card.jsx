// Generated with Claude Code assistance
import { cn } from '@/lib/utils'

export function Card({ className, children, interactive = false, ...props }) {
  return (
    <div
      className={cn(
        'bg-background-card rounded-[12px] border border-border shadow-card',
        interactive && 'cursor-pointer transition-all hover:border-primary hover:shadow-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('flex items-center justify-between p-6 pb-0', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={cn('text-[15px] font-bold text-text-primary flex items-center gap-2', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  )
}
