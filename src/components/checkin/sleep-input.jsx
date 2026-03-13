// Generated with Claude Code assistance
import { Moon } from 'lucide-react'
import { Card, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { sleepOptions } from '@/data/data'
import { cn } from '@/lib/utils'

const badgeMap = {
  Poor:      'warning',
  Fair:      'neutral',
  Good:      'success',
  Excellent: 'primary',
}

const durationMap = {
  Poor:      '<5 hrs',
  Fair:      '5-6 hrs',
  Good:      '7-8 hrs',
  Excellent: '8+ hrs',
}

export default function SleepInput({ value, onChange }) {
  return (
    <Card>
      <CardContent>
        <CardTitle className="mb-4">
          <Moon className="w-4 h-4 text-primary" strokeWidth={1.8} />
          Sleep Quality
        </CardTitle>

        <div className="relative">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            aria-label="Sleep quality"
            className={cn(
              'w-full h-10 pl-3 pr-10 rounded-md border border-gray-200 bg-background-soft',
              'font-sans text-[14px] font-semibold text-text-primary appearance-none',
              'focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer'
            )}
          >
            <option value="">Select sleep quality...</option>
            {sleepOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {/* Chevron icon */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>

        {/* Selected badge */}
        {value && (
          <div className="flex gap-2 mt-3">
            <Badge variant={badgeMap[value] || 'primary'} size="sm">{value} selected</Badge>
            <Badge variant="neutral" size="sm">{durationMap[value]}</Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
