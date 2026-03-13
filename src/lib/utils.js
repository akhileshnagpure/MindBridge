// Generated with Claude Code assistance
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merges Tailwind class names, resolving conflicts */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/** Format a date to "Mon 13" style */
export function formatShortDate(date) {
  return new Intl.DateTimeFormat('en-US', { weekday: 'short', day: 'numeric' }).format(date)
}

/** Generate last N days array for chart data */
export function getLastNDays(n) {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (n - 1 - i))
    return d
  })
}
