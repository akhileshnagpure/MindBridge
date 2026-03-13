// Generated with Claude Code assistance
// feat: implement check-in page mood selector
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import MoodSelector from '@/components/checkin/mood-selector'
import JournalInput from '@/components/checkin/journal-input'
import EnergyInput from '@/components/checkin/energy-input'
import SleepInput from '@/components/checkin/sleep-input'
import StreakDisplay from '@/components/checkin/streak-display'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function CheckInPage() {
  const navigate = useNavigate()

  const [mood,    setMood]    = useState(null)
  const [journal, setJournal] = useState('')
  const [energy,  setEnergy]  = useState(7)
  const [sleep,   setSleep]   = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Calculate completion %
  const fields = [mood, journal.length > 0, energy, sleep]
  const completion = Math.round((fields.filter(Boolean).length / fields.length) * 100)

  function handleSubmit() {
    if (!mood) return
    setSubmitted(true)
    setTimeout(() => navigate('/dashboard'), 2000)
  }

  // Success state
  if (submitted) {
    return (
      <div className="h-full flex items-center justify-center p-6">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 rounded-full bg-success-soft mx-auto flex items-center justify-center mb-5">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <h2 className="text-[24px] font-extrabold text-text-primary mb-2">Check-In Complete!</h2>
          <p className="text-[15px] font-medium text-text-secondary leading-relaxed">
            "Showing up for yourself today is a powerful step."
          </p>
          <p className="text-[13px] text-text-muted mt-3">Returning to dashboard…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pl-10 pt-7 pr-6 pb-24 md:pb-10 flex flex-col gap-[18px]">

      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-primary-soft text-primary text-[11px] font-bold px-3 py-1 rounded-full">
            📅 Thursday, March 13 · 2026
          </span>
        </div>
        <h1 className="text-[26px] font-extrabold text-text-primary tracking-tight">
          How are you feeling today?
        </h1>
        <p className="text-[15px] font-medium text-text-secondary">
          Your daily check-in helps you understand your emotional patterns.
        </p>
      </div>

      {/* Mood Selector */}
      <Card>
        <CardContent>
          <h3 className="text-[15px] font-bold text-text-primary flex items-center gap-2 mb-4">
            😊 Mood Check
          </h3>
          <MoodSelector selected={mood} onChange={setMood} />
        </CardContent>
      </Card>

      {/* Journal */}
      <Card>
        <CardContent>
          <JournalInput value={journal} onChange={setJournal} />
        </CardContent>
      </Card>

      {/* Energy + Sleep row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <EnergyInput value={energy} onChange={setEnergy} />
        <SleepInput  value={sleep}  onChange={setSleep} />
      </div>

      {/* Streak + Submit side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] items-start">
        <StreakDisplay />

      {/* Submit card */}
      <Card>
        <CardContent>
          <div className="flex flex-col gap-3">
            <h3 className="text-[15px] font-bold text-text-primary">Almost done!</h3>
            <p className="text-[13px] font-medium text-text-secondary">
              Review your responses above, then submit your check-in. Your data stays private and helps personalise your journey.
            </p>
            <Progress value={completion} label="Check-In Completion" />

            <Button
              variant="primary"
              size="lg"
              onClick={handleSubmit}
              disabled={!mood}
              aria-label="Submit daily check-in"
              className="w-full whitespace-nowrap rounded-[8px] pl-[9px] pr-4 py-3 gap-[10px]"
            >
              <CheckCircle2 className="w-4 h-4" />
              Submit Check-In
            </Button>
          </div>

          <p className="text-[13px] font-medium text-text-muted text-center italic mt-4">
            ⭐ "Showing up for yourself today is a powerful step."
          </p>
        </CardContent>
      </Card>
      </div>

    </div>
  )
}
