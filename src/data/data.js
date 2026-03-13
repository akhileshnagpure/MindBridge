// Generated with Claude Code assistance
// MindBridge – all static data lives here

// ── User profile ──────────────────────────────────────────
export const userProfile = {
  name: 'Priya Sharma',
  email: 'priya.sharma@techcorp.com',
  avatar: 'PS',
  role: 'Patient',
  streak: 14,
}

// ── Mood trend data – last 14 days ────────────────────────
export const moodTrendData = [
  { day: 'Mar 1',  score: 3 },
  { day: 'Mar 2',  score: 4 },
  { day: 'Mar 3',  score: 3 },
  { day: 'Mar 4',  score: 5 },
  { day: 'Mar 5',  score: 4 },
  { day: 'Mar 6',  score: 4 },
  { day: 'Mar 7',  score: 3 },
  { day: 'Mar 8',  score: 4 },
  { day: 'Mar 9',  score: 5 },
  { day: 'Mar 10', score: 3 },
  { day: 'Mar 11', score: 4 },
  { day: 'Mar 12', score: 4 },
  { day: 'Mar 13', score: 3 },
  { day: 'Mar 14', score: 5 },
]

// ── Therapist info ────────────────────────────────────────
export const therapist = {
  name: 'Dr. Emily Carter',
  title: 'Licensed Clinical Psychologist',
  experience: '9 years',
  rating: 4.8,
  reviews: 124,
  specializations: ['Anxiety', 'Stress Management', 'CBT', 'Mindfulness'],
  languages: ['English', 'Spanish'],
  sessions: 350,
  satisfaction: 98,
  availability: 'Available',
  nextSession: {
    date: 'March 15',
    time: '3:00 PM',
    type: 'Video Call',
  },
}

// ── Dashboard stats ───────────────────────────────────────
export const dashboardStats = [
  {
    id: 'exercises',
    title: 'Exercises Completed',
    value: '8',
    unit: 'this week',
    delta: '+2 vs last week',
    icon: 'Activity',
    color: 'teal',
  },
  {
    id: 'mindfulness',
    title: 'Mindfulness Minutes',
    value: '45',
    unit: 'minutes',
    delta: '+10 min vs last week',
    icon: 'Timer',
    color: 'green',
  },
  {
    id: 'streak',
    title: 'Check-In Streak',
    value: '14',
    unit: 'days',
    delta: 'Next milestone: 21 days',
    icon: 'Flame',
    color: 'amber',
  },
]

// ── Recommended exercises ─────────────────────────────────
export const exercises = [
  {
    id: 'breathing',
    title: 'Breathing Exercise',
    description: '5 minute guided breathing to calm your mind.',
    duration: '5 min',
    level: 'Beginner',
    icon: 'Wind',
  },
  {
    id: 'journaling',
    title: 'Guided Journaling',
    description: 'Reflect on your thoughts and emotions.',
    duration: '10 min',
    level: 'All levels',
    icon: 'BookOpen',
  },
  {
    id: 'grounding',
    title: 'Grounding Technique',
    description: 'Reduce anxiety by focusing on the present moment.',
    duration: '7 min',
    level: 'Beginner',
    icon: 'Leaf',
  },
]

// ── Mood options ──────────────────────────────────────────
export const moodOptions = [
  { id: 'very-low', label: 'Very Low', emoji: '😞', score: 1 },
  { id: 'low',      label: 'Low',      emoji: '😕', score: 2 },
  { id: 'neutral',  label: 'Neutral',  emoji: '😐', score: 3 },
  { id: 'good',     label: 'Good',     emoji: '🙂', score: 4 },
  { id: 'great',    label: 'Great',    emoji: '😄', score: 5 },
]

// ── Time slots ────────────────────────────────────────────
export const timeSlots = {
  morning: ['9:00 AM', '10:00 AM', '11:00 AM'],
  afternoon: ['1:00 PM', '2:00 PM', '3:00 PM'],
  evening: ['5:00 PM', '6:00 PM', '7:00 PM'],
}

// ── Unavailable slots ─────────────────────────────────────
export const unavailableSlots = ['9:00 AM']

// ── Session types ─────────────────────────────────────────
export const sessionTypes = [
  { id: 'video', label: 'Video Call', sublabel: 'Face-to-face', icon: 'Video' },
  { id: 'audio', label: 'Audio Call', sublabel: 'Voice only',   icon: 'Phone' },
  { id: 'chat',  label: 'Chat',       sublabel: 'Text-based',   icon: 'MessageCircle' },
]

// ── Navigation items ──────────────────────────────────────
export const navItems = [
  { id: 'home',      label: 'Home',       icon: 'Home',    path: '/dashboard' },
  { id: 'checkin',   label: 'Check-In',   icon: 'ClipboardCheck', path: '/checkin', badge: 'Today' },
  { id: 'journey',   label: 'My Journey', icon: 'Activity', path: '/dashboard' },
  { id: 'sessions',  label: 'Sessions',   icon: 'Users',   path: '/book-session' },
  { id: 'settings',  label: 'Settings',   icon: 'Settings', path: '#' },
]

// ── Sleep quality options ─────────────────────────────────
export const sleepOptions = ['Poor', 'Fair', 'Good', 'Excellent']
