// Generated with Claude Code assistance
import { Video, Phone, MessageCircle, Check } from 'lucide-react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { sessionTypes } from '@/data/data'
import { cn } from '@/lib/utils'

const iconMap = { Video, Phone, MessageCircle }

export default function SessionTypeSelector({ selected, onChange }) {
  return (
    <Card>
      <CardContent>
        <CardTitle className="mb-4">
          <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          </svg>
          Session Type
        </CardTitle>

        <div className="flex gap-3" role="radiogroup" aria-label="Session type">
          {sessionTypes.map((type) => {
            const Icon = iconMap[type.icon] || Video
            const isSelected = selected === type.id
            return (
              <button
                key={type.id}
                role="radio"
                aria-checked={isSelected}
                aria-label={type.label}
                onClick={() => onChange(type.id)}
                className={cn(
                  'flex-1 flex flex-col items-center gap-2 py-4 px-3 rounded-[12px] border-2 transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer',
                  isSelected
                    ? 'border-primary bg-primary-soft'
                    : 'border-border hover:border-primary hover:bg-primary-soft'
                )}
              >
                <Icon
                  className={cn('w-5 h-5', isSelected ? 'text-primary' : 'text-text-secondary')}
                  strokeWidth={1.8}
                />
                <span className={cn(
                  'text-[13px] font-bold',
                  isSelected ? 'text-primary' : 'text-text-secondary'
                )}>
                  {type.label}
                </span>
                <span className="text-[11px] font-medium text-text-muted">{type.sublabel}</span>
                {isSelected && (
                  <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
