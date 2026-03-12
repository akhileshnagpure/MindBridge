// Generated with Claude Code assistance
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1 font-bold rounded-full',
  {
    variants: {
      variant: {
        primary: 'bg-primary-soft text-primary',
        neutral: 'bg-background-soft text-text-secondary border border-border',
        success: 'bg-success-soft text-success',
        warning: 'bg-warning-soft text-warning',
        dark:    'bg-text-primary text-white',
      },
      size: {
        sm:  'text-[10px] px-2 py-0.5',
        md:  'text-[11px] px-2.5 py-1',
        lg:  'text-[13px] px-3 py-1.5',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
)

export function Badge({ className, variant, size, children, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {children}
    </span>
  )
}
