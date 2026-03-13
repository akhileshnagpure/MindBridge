// Generated with Claude Code assistance
import { Calendar, Video, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { therapist } from '@/data/data'

export default function TherapistCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Video className="w-4 h-4 text-primary" strokeWidth={1.8} />
          Upcoming Session
        </CardTitle>
        <Badge variant="success">Confirmed</Badge>
      </CardHeader>

      <CardContent className="pt-4">
        {/* Therapist info */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C8E6E2] to-primary-soft border-3 border-primary-soft flex items-center justify-center text-xl font-extrabold text-primary">
              EC
            </div>
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-success rounded-full border-2 border-white" />
          </div>

          {/* Info */}
          <div className="flex-1">
            <p className="text-[16px] font-extrabold text-text-primary">{therapist.name}</p>
            <Badge variant="primary" size="sm" className="mt-1 mb-2">
              {therapist.specializations[0]}
            </Badge>
            <div className="flex items-center gap-1.5 text-[13px] font-semibold text-text-secondary">
              <Calendar className="w-4 h-4 text-text-muted" strokeWidth={1.8} />
              {therapist.nextSession.date} · {therapist.nextSession.time}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-4">
          <Button variant="primary" size="sm" className="flex-1">
            <Video className="w-4 h-4" />
            Join Session
          </Button>
          <Button variant="secondary" size="sm" className="flex-1">
            <RefreshCw className="w-4 h-4" />
            Reschedule
          </Button>
        </div>

        {/* Pre-session progress */}
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2">
            Session Prep
          </p>
          <Progress value={60} label="Pre-session notes" />
        </div>
      </CardContent>
    </Card>
  )
}
