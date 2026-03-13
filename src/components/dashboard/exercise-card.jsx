// Generated with Claude Code assistance
import { Wind, BookOpen, Leaf, Clock, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const iconMap = { Wind, BookOpen, Leaf }

const variants = ['primary', 'secondary', 'ghost']

export default function ExerciseCard({ exercise, index = 0 }) {
  const Icon = iconMap[exercise.icon] || Wind
  const btnVariant = variants[index % variants.length]

  return (
    <Card
      interactive
      className={cn('flex flex-col gap-3 p-5 transition-all')}
    >
      {/* Icon */}
      <div className="w-11 h-11 rounded-[8px] bg-primary-soft flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="text-[14px] font-extrabold text-text-primary">{exercise.title}</h4>
        <p className="text-[13px] font-medium text-text-secondary leading-relaxed mt-1">
          {exercise.description}
        </p>
      </div>

      {/* Duration */}
      <div className="flex items-center gap-1.5 text-[11px] font-bold text-text-muted">
        <Clock className="w-3 h-3" strokeWidth={2} />
        {exercise.duration} · {exercise.level}
      </div>

      {/* CTA */}
      <Button variant={btnVariant} size="sm" className="w-full mt-1" aria-label={`Start ${exercise.title}`}>
        <Play className="w-3.5 h-3.5" />
        Start Exercise
      </Button>
    </Card>
  )
}
