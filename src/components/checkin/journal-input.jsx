// Generated with Claude Code assistance
import { useState } from 'react'
import { cn } from '@/lib/utils'

const MAX_CHARS = 500

export default function JournalInput({ value, onChange }) {
  const count = value.length
  const isNearLimit = count > MAX_CHARS * 0.8

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-bold text-text-primary">Journal Entry</label>
      <div
        className={cn(
          'rounded-[8px] border overflow-hidden transition-all',
          'focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20',
          'border-border'
        )}
      >
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, MAX_CHARS))}
          placeholder="Write about how you're feeling today..."
          aria-label="Journal entry text area"
          rows={5}
          className={cn(
            'w-full p-4 resize-none bg-background-card font-sans text-[14px] font-medium',
            'text-text-primary placeholder:text-text-muted outline-none leading-relaxed'
          )}
        />
        {/* Footer bar */}
        <div className="flex items-center justify-between px-3 py-2 border-t border-border bg-background-soft">
          <span className={cn(
            'text-[12px] font-bold',
            isNearLimit ? 'text-warning' : 'text-text-muted'
          )}>
            {count} / {MAX_CHARS} characters
          </span>
          <div className="flex gap-1.5">
            {['😊','✏️','💬'].map((em) => (
              <button key={em} className="w-6 h-6 rounded flex items-center justify-center hover:bg-primary-soft transition-colors text-sm" aria-label="Emoji">
                {em}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
