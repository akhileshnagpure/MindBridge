// Generated with Claude Code assistance
import { User, Calendar, Clock, Video, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { therapist } from '@/data/data'
import { sessionTypes } from '@/data/data'

export default function BookingSummary({ date, time, sessionType, onBook }) {
  const sessionLabel = sessionTypes.find((s) => s.id === sessionType)?.label || '—'

  return (
    <Card>
      <CardContent>
        <CardTitle className="mb-5">
          <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
          </svg>
          Session Summary
        </CardTitle>

        {/* Therapist mini-header */}
        <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#C8E6E2] to-primary-soft border-2 border-primary-soft flex items-center justify-center text-[15px] font-extrabold text-primary flex-shrink-0">
            EC
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-extrabold text-text-primary">{therapist.name}</p>
            <p className="text-[12px] font-semibold text-text-muted">{therapist.specializations[0]}</p>
          </div>
          <span className="text-[11px] font-bold bg-success-soft text-success px-2 py-1 rounded-full">
            Confirmed
          </span>
        </div>

        {/* Summary rows */}
        <div className="flex flex-col gap-3 mb-4">
          {[
            { Icon: User,     label: 'Therapist',    value: therapist.name },
            { Icon: Calendar, label: 'Date',         value: date ? `${date.month} ${date.date}` : '—' },
            { Icon: Clock,    label: 'Time',         value: time || '—' },
            { Icon: Video,    label: 'Session Type', value: sessionLabel },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[13px] font-semibold text-text-secondary">
                <row.Icon className="w-4 h-4 text-text-muted" strokeWidth={1.8} />
                {row.label}
              </div>
              <span className="text-[13px] font-bold text-text-primary">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-4 mb-4 flex items-center justify-between">
          <span className="text-[13px] font-bold text-text-secondary">Session Fee</span>
          <span className="text-[20px] font-extrabold text-text-primary">$85.00</span>
        </div>

        {/* CTA */}
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={onBook}
          aria-label="Confirm and book session"
        >
          <CheckCircle2 className="w-4 h-4" />
          Book Session
        </Button>

        <Button variant="ghost" size="md" className="w-full mt-2">
          Save for Later
        </Button>

        <p className="text-[12px] font-medium text-text-muted text-center mt-3 leading-relaxed">
          Free cancellation up to 24 hours before your session.
        </p>
      </CardContent>
    </Card>
  )
}
