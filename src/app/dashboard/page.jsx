// Generated with Claude Code assistance
// feat: generate dashboard layout with Claude Code
import { useNavigate } from 'react-router-dom'
import { Smile } from 'lucide-react'
import MoodChart from '@/components/dashboard/mood-chart'
import TherapistCard from '@/components/dashboard/therapist-card'
import StatCard from '@/components/dashboard/stat-card'
import ExerciseCard from '@/components/dashboard/exercise-card'
import { Button } from '@/components/ui/button'
import { dashboardStats, exercises, userProfile } from '@/data/data'

export default function DashboardPage() {
  const navigate = useNavigate()

  return (
    <div className="p-6 md:p-10 flex flex-col gap-6 pb-24 md:pb-10">

      {/* Welcome banner */}
      <div className="rounded-[16px] bg-gradient-to-r from-primary to-primary-dark p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-white/80 text-[13px] font-semibold">Good morning 👋</p>
          <h2 className="text-white text-[22px] font-extrabold tracking-tight mt-1">
            Welcome back, {userProfile.name.split(' ')[0]}
          </h2>
          <p className="text-white/75 text-[13px] font-medium mt-1">
            Here's your wellness snapshot for today
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          {[
            { val: `${userProfile.streak}`, label: 'Day Streak' },
            { val: 'Good', label: 'Avg Mood' },
            { val: 'Mar 15', label: 'Next Session' },
          ].map((s) => (
            <div key={s.label} className="bg-white/15 border border-white/25 rounded-[12px] px-4 py-3 text-center backdrop-blur-sm">
              <p className="text-white text-[20px] font-extrabold leading-none">{s.val}</p>
              <p className="text-white/80 text-[11px] font-semibold mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Chart + Session card */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <MoodChart />
        <TherapistCard />
      </div>

      {/* Exercises + Quick Mood Log */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">

        {/* Exercises */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[16px] font-extrabold text-text-primary">
              Recommended Self-Care Exercises
            </h3>
            <span className="text-[13px] font-semibold text-primary cursor-pointer hover:underline">
              See all →
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {exercises.map((ex, i) => (
              <ExerciseCard key={ex.id} exercise={ex} index={i} />
            ))}
          </div>
        </div>

        {/* Quick Mood Log */}
        <div className="bg-gradient-to-br from-primary-soft to-[#D4EEE9] rounded-[12px] border border-primary/20 p-5 shadow-card flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-primary rounded-[8px] flex items-center justify-center">
              <Smile className="w-5 h-5 text-white" strokeWidth={1.8} />
            </div>
            <div>
              <h4 className="text-[15px] font-extrabold text-text-primary">Quick Mood Log</h4>
              <p className="text-[13px] font-medium text-text-secondary">
                Log how you're feeling in seconds.
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            size="md"
            className="w-full"
            onClick={() => navigate('/checkin')}
            aria-label="Navigate to daily check-in"
          >
            Log Mood
          </Button>
        </div>

      </div>
    </div>
  )
}
