// Generated with Claude Code assistance
import { cn } from '@/lib/utils'
import { moodOptions } from '@/data/data'
import { Check } from 'lucide-react'

export default function MoodSelector({ selected, onChange }) {
  return (
    <div className="flex gap-3" role="radiogroup" aria-label="Select your mood">
      {moodOptions.map((mood) => {
        const isSelected = selected?.id === mood.id
        return (
          <button
            key={mood.id}
            role="radio"
            aria-checked={isSelected}
            aria-label={mood.label}
            onClick={() => onChange(mood)}
            className={cn(
              'flex-1 flex flex-col items-center gap-2.5 py-4 px-2 rounded-[12px] border-2 cursor-pointer transition-all',
              'hover:border-primary hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              isSelected
                ? 'border-primary bg-primary-soft shadow-[0_0_0_3px_rgba(95,168,164,0.12)]'
                : 'border-border bg-background'
            )}
          >
            <span className="text-3xl leading-none">{mood.emoji}</span>
            <span className={cn(
              'text-[12px] font-bold',
              isSelected ? 'text-primary' : 'text-text-secondary'
            )}>
              {mood.label}
            </span>
            {isSelected && (
              <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
              </div>
            )}
          </button>
        )
      })}
    </div>
  )
}
