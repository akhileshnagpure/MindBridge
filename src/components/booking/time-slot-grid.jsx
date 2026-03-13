// Generated with Claude Code assistance
import { Sun, Cloud, Moon } from 'lucide-react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { timeSlots, unavailableSlots } from '@/data/data'
import { cn } from '@/lib/utils'

const groups = [
  { key: 'morning',   label: 'Morning',   Icon: Sun   },
  { key: 'afternoon', label: 'Afternoon', Icon: Cloud },
  { key: 'evening',   label: 'Evening',   Icon: Moon  },
]

export default function TimeSlotGrid({ selected, onChange, selectedDate }) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between mb-5">
          <CardTitle>
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            Available Time Slots
          </CardTitle>
          {selectedDate && (
            <Badge variant="primary" size="sm">
              {selectedDate.month} {selectedDate.date}
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-5">
          {groups.map(({ key, label, Icon }) => (
            <div key={key}>
              {/* Group label */}
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2.5">
                <Icon className="w-3 h-3" strokeWidth={2} />
                {label}
              </div>
              {/* Slots */}
              <div className="flex flex-wrap gap-2">
                {timeSlots[key].map((slot) => {
                  const isUnavailable = unavailableSlots.includes(slot)
                  const isSelected = selected === slot
                  return (
                    <button
                      key={slot}
                      disabled={isUnavailable}
                      onClick={() => !isUnavailable && onChange(slot)}
                      aria-label={`${slot}${isUnavailable ? ' unavailable' : ''}`}
                      aria-pressed={isSelected}
                      className={cn(
                        'px-4 py-2 rounded-[8px] border-[1.5px] font-sans text-[13px] font-bold transition-all',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                        isUnavailable && 'opacity-40 cursor-not-allowed border-border text-text-muted line-through',
                        !isUnavailable && !isSelected && 'border-border text-text-secondary hover:border-primary hover:bg-primary-soft hover:text-primary cursor-pointer',
                        isSelected && 'bg-primary border-primary text-white cursor-pointer',
                      )}
                    >
                      {slot}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
