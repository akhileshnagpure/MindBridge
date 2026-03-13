// Generated with Claude Code assistance
import { cn } from '@/lib/utils'
import { moodOptions } from '@/data/data'

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
              'flex-1 flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-[12px] border-2 cursor-pointer transition-all',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500',
              isSelected
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
            )}
          >
            <span className="text-3xl leading-none">{mood.emoji}</span>
            <span className={cn(
              'text-[12px] font-bold text-center',
              isSelected ? 'text-green-600' : 'text-text-secondary'
            )}>
              {mood.label}
            </span>
            {isSelected && (
              <span className="w-2 h-2 rounded-full bg-green-500" />
            )}
          </button>
        )
      })}
    </div>
  )
}
