// Generated with Claude Code assistance
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const Input = forwardRef(function Input(
  { className, label, helperText, error, ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-[13px] font-bold text-text-primary">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          'h-10 px-3 rounded-[8px] border bg-background-card font-sans text-[14px] font-medium text-text-primary',
          'placeholder:text-text-muted outline-none transition-all',
          'border-border focus:border-primary focus:ring-2 focus:ring-primary/20',
          error && 'border-warning focus:border-warning focus:ring-warning/20',
          className
        )}
        {...props}
      />
      {helperText && (
        <p className={cn('text-[11px] font-semibold', error ? 'text-warning' : 'text-text-muted')}>
          {helperText}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'
