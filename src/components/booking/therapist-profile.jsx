// Generated with Claude Code assistance
import { Globe, MessageSquare, Star, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { therapist } from '@/data/data'

export default function TherapistProfile() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-5 items-start">

          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#C8E6E2] to-primary-soft border-4 border-primary-soft flex items-center justify-center text-2xl font-extrabold text-primary">
              EC
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-success rounded-full border-2 border-white" aria-label="Available" />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-[18px] font-extrabold text-text-primary">{therapist.name}</h2>
            <p className="text-[13px] font-semibold text-text-secondary mt-0.5 mb-2">
              {therapist.title} · {therapist.experience} experience
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-warning text-warning" />
                ))}
              </div>
              <span className="text-[13px] font-bold text-text-primary">{therapist.rating}</span>
              <span className="text-[12px] font-semibold text-text-muted">({therapist.reviews} reviews)</span>
              <Badge variant="success" size="sm">{therapist.availability}</Badge>
            </div>

            {/* Specialization tags */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {therapist.specializations.map((s) => (
                <Badge key={s} variant={s === 'Anxiety' || s === 'Stress Management' ? 'primary' : 'neutral'} size="sm">
                  {s}
                </Badge>
              ))}
            </div>

            {/* Languages */}
            <div className="flex items-center gap-1.5 text-[13px] font-semibold text-text-secondary">
              <Globe className="w-4 h-4 text-text-muted" strokeWidth={1.8} />
              {therapist.languages.join(', ')}
            </div>
          </div>

          {/* Stats + actions */}
          <div className="flex flex-col gap-3 items-end">
            <div className="flex gap-2">
              {[
                { val: therapist.experience, label: 'Experience' },
                { val: `${therapist.sessions}+`, label: 'Sessions' },
                { val: `${therapist.satisfaction}%`, label: 'Satisfaction' },
              ].map((s) => (
                <div key={s.label} className="text-center bg-background-soft border border-border rounded-[8px] px-3 py-2">
                  <p className="text-[16px] font-extrabold text-text-primary">{s.val}</p>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                <MessageSquare className="w-4 h-4" />
                Message
              </Button>
              <Button variant="ghost" size="sm">
                <ExternalLink className="w-4 h-4" />
                View Profile
              </Button>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  )
}
