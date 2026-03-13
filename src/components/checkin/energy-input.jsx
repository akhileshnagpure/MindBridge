// Generated with Claude Code assistance
import { Zap } from 'lucide-react'
import { Card, CardTitle, CardContent } from '@/components/ui/card'

export default function EnergyInput({ value, onChange }) {
  const pct = ((value - 1) / 9) * 100

  return (
    <Card>
      <CardContent>
        <CardTitle className="mb-4">
          <Zap className="w-4 h-4 text-primary" strokeWidth={1.8} />
          Energy Level
        </CardTitle>

        {/* Slider + value */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 h-2 bg-background-soft rounded-full border border-border overflow-visible">
            {/* Fill */}
            <div
              className="absolute left-0 top-0 bottom-0 rounded-full bg-gradient-to-r from-primary to-primary-bright transition-all"
              style={{ width: `${pct}%` }}
            />
            {/* Native range input – invisible but functional */}
            <input
              type="range"
              min={1}
              max={10}
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              aria-label="Energy level"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {/* Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full border-[3px] border-white shadow-md pointer-events-none transition-all"
              style={{ left: `calc(${pct}% - 10px)` }}
            />
          </div>
          <span className="text-[18px] font-extrabold text-primary w-6 text-right">{value}</span>
        </div>

        <div className="flex justify-between text-[11px] font-semibold text-text-muted mt-2">
          <span>Low (1)</span>
          <span>Moderate (5)</span>
          <span>High (10)</span>
        </div>
      </CardContent>
    </Card>
  )
}
