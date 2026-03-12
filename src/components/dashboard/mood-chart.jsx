// Generated with Claude Code assistance
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts'
import { TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { moodTrendData } from '@/data/data'

// Custom tooltip
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  const score = payload[0].value
  const labels = ['', 'Very Low', 'Low', 'Neutral', 'Good', 'Great']
  return (
    <div className="bg-text-primary text-white px-3 py-2 rounded-[8px] text-[12px] font-bold shadow-xl">
      <p className="text-text-muted text-[10px]">{label}</p>
      <p>{labels[score]} · {score}/5</p>
    </div>
  )
}

export default function MoodChart() {
  const avg = (moodTrendData.reduce((s, d) => s + d.score, 0) / moodTrendData.length).toFixed(1)

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle>
          <TrendingUp className="w-4 h-4 text-primary" strokeWidth={1.8} />
          Mood Trends — Last 14 Days
        </CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="primary" size="sm">14 days</Badge>
          <span className="text-[13px] font-semibold text-primary cursor-pointer hover:underline">
            View all →
          </span>
        </div>
      </CardHeader>

      <CardContent className="pt-2">
        {/* Chart */}
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={moodTrendData} margin={{ top: 8, right: 4, left: -24, bottom: 0 }}>
            <defs>
              <linearGradient id="moodGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#5FA8A4" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#5FA8A4" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 10, fontFamily: 'Nunito', fontWeight: 700, fill: 'var(--text-muted)' }}
              axisLine={false} tickLine={false}
              interval={1}
            />
            <YAxis
              domain={[1, 5]}
              ticks={[1, 2, 3, 4, 5]}
              tick={{ fontSize: 10, fontFamily: 'Nunito', fontWeight: 700, fill: 'var(--text-muted)' }}
              axisLine={false} tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              y={parseFloat(avg)}
              stroke="var(--warning)"
              strokeDasharray="5 3"
              strokeWidth={1.5}
              strokeOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="score"
              stroke="var(--primary)"
              strokeWidth={2.5}
              fill="url(#moodGrad)"
              dot={{ r: 4, fill: 'var(--primary)', stroke: 'white', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: 'var(--primary)', stroke: 'white', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Legend + tags */}
        <div className="flex flex-wrap items-center justify-between mt-3 gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[12px] font-semibold text-text-secondary">
              <div className="w-3 h-0.5 bg-primary rounded" />Mood Score
            </div>
            <div className="flex items-center gap-1.5 text-[12px] font-semibold text-text-secondary">
              <div className="w-3 h-0.5 bg-warning rounded" />Avg Baseline
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="success"  size="sm">Avg: {avg}/5</Badge>
            <Badge variant="primary"  size="sm">Peak: Great (5)</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
