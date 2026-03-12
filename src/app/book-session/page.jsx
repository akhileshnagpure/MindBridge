// Generated with Claude Code assistance
// feat: add therapist booking flow
import { useState } from 'react'
import TherapistProfile from '@/components/booking/therapist-profile'
import CalendarPicker from '@/components/booking/calendar-picker'
import TimeSlotGrid from '@/components/booking/time-slot-grid'
import SessionTypeSelector from '@/components/booking/session-type-selector'
import BookingSummary from '@/components/booking/booking-summary'
import { Toast } from '@/components/ui/toast'

export default function BookSessionPage() {
  const [selectedDate,    setSelectedDate]    = useState({ date: 15, month: 'Mar' })
  const [selectedTime,    setSelectedTime]    = useState('3:00 PM')
  const [sessionType,     setSessionType]     = useState('video')
  const [toastVisible,    setToastVisible]    = useState(false)

  function handleBook() {
    setToastVisible(true)
  }

  return (
    <div className="p-6 md:p-10 flex flex-col gap-5 pb-24 md:pb-10">

      {/* Therapist Profile Card */}
      <TherapistProfile />

      {/* Two-column booking layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5 items-start">

        {/* Left: Session type + Calendar + Time slots */}
        <div className="flex flex-col gap-5">
          <SessionTypeSelector selected={sessionType} onChange={setSessionType} />
          <CalendarPicker selected={selectedDate} onChange={setSelectedDate} />
          <TimeSlotGrid
            selected={selectedTime}
            onChange={setSelectedTime}
            selectedDate={selectedDate}
          />
        </div>

        {/* Right: Booking Summary */}
        <BookingSummary
          date={selectedDate}
          time={selectedTime}
          sessionType={sessionType}
          onBook={handleBook}
        />

      </div>

      {/* Confirmation toast */}
      <Toast
        message="Your session has been successfully scheduled."
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

    </div>
  )
}
