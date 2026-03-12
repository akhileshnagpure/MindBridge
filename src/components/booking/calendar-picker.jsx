// Generated with Claude Code assistance
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// Build calendar days for March 2026
function buildMarchDays() {
  // March 2026 starts on Sunday (index 6 in Mon-Sun grid)
  // We show last week of Feb + March weeks
  const days = []
  // Padding from previous month
  for (let d = 24; d <= 28; d++) days.push({ date: d, month: 'Feb', available: false, past: true })
  // March days
  for (let d = 1; d <= 28; d++) {
    days.push({
      date: d,
      month: 'Mar',
      available: [13, 14, 15, 17, 18, 19, 20, 21].includes(d),
      past: d < 13,
      today: d === 13,
    })
  }
  return days
}

const allDays = buildMarchDays()

export default function CalendarPicker({ selected, onChange }) {
  const [month] = useState('March 2026')

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Select Appointment Date
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-4">
          <button aria-label="Previous month" className="w-8 h-8 rounded-[8px] border border-border flex items-center justify-center text-text-secondary hover:bg-primary-soft hover:border-primary hover:text-primary transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[14px] font-extrabold text-text-primary">{month}</span>
          <button aria-label="Next month" className="w-8 h-8 rounded-[8px] border border-border flex items-center justify-center text-text-secondary hover:bg-primary-soft hover:border-primary hover:text-primary transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {WEEKDAYS.map((d) => (
            <div key={d} className="text-center text-[11px] font-bold text-text-muted py-1">{d}</div>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1">
          {allDays.map((day, i) => {
            const isSelected = selected?.date === day.date && selected?.month === day.month
            return (
              <button
                key={i}
                disabled={day.past || !day.available}
                onClick={() => !day.past && onChange(day)}
                aria-label={`${day.month} ${day.date}`}
                aria-pressed={isSelected}
                className={cn(
                  'relative flex flex-col items-center justify-center rounded-[8px] py-2 border-[1.5px] transition-all min-h-[44px]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  day.past && 'opacity-35 cursor-not-allowed border-transparent',
                  !day.past && !isSelected && 'border-transparent hover:border-primary hover:bg-primary-soft cursor-pointer',
                  day.today && !isSelected && 'border-primary',
                  isSelected && 'border-primary bg-primary cursor-pointer',
                )}
              >
                <span className={cn(
                  'text-[14px] font-bold',
                  isSelected ? 'text-white' : day.today ? 'text-primary' : 'text-text-primary',
                  day.past && 'text-text-muted'
                )}>
                  {day.date}
                </span>
                {day.available && (
                  <span className={cn(
                    'w-1 h-1 rounded-full mt-0.5',
                    isSelected ? 'bg-white/70' : 'bg-primary'
                  )} />
                )}
              </button>
            )
          })}
        </div>

        {/* Legend */}
        <div className="flex gap-4 mt-4 pt-3 border-t border-border">
          {[
            { dot: 'bg-primary', label: 'Available' },
            { dot: 'bg-primary opacity-30', label: 'Unavailable' },
            { dot: 'bg-primary border-2 border-white ring-1 ring-primary', label: 'Selected' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5 text-[11px] font-semibold text-text-muted">
              <div className={cn('w-2 h-2 rounded-full', l.dot)} />
              {l.label}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
