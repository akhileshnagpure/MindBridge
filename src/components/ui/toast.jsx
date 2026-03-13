// Generated with Claude Code assistance
import { useState, useEffect } from 'react'
import { CheckCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Toast({ message, visible, onClose }) {
  useEffect(() => {
    if (visible) {
      const t = setTimeout(onClose, 4000)
      return () => clearTimeout(t)
    }
  }, [visible, onClose])

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-text-primary text-white',
        'px-5 py-3.5 rounded-[12px] shadow-xl transition-all duration-300 max-w-sm',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
      <span className="text-[14px] font-semibold flex-1">{message}</span>
      <button onClick={onClose} aria-label="Dismiss" className="hover:opacity-70 transition-opacity">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
