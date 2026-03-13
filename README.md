# MindBridge --- Mental Wellness Patient Portal

MindBridge is a mental wellness patient portal designed to help
individuals monitor their emotional well-being and connect with
therapists. The application provides a daily mental health check-in,
mood tracking dashboard, and therapy session booking system within a
calm and supportive user interface.

The goal of MindBridge is to make mental health tracking simple,
encouraging users to reflect on their emotions while providing easy
access to professional support when needed.

------------------------------------------------------------------------

## Key Features

### Wellness Dashboard

The dashboard provides users with a quick overview of their mental
health activity and wellness insights. It includes mood trends, wellness
statistics, therapist information, and suggested wellness exercises.

### Daily Check-In

The daily check-in feature encourages users to reflect on their
emotional state. Users can select their mood, write a short journal
entry, track their energy levels, record sleep quality, and maintain a
streak of consistent check-ins.

### Therapist Session Booking

Users can easily schedule therapy sessions through an intuitive booking
interface. The booking flow includes viewing therapist details,
selecting a date from a calendar, choosing an available time slot, and
confirming the session.

### Responsive Experience

The application is fully responsive and adapts across devices. Desktop
users interact through a sidebar-based layout, while mobile users
navigate through a bottom navigation interface.

------------------------------------------------------------------------

## Tech Stack

-   React 18
-   Vite 5
-   React Router v6
-   Tailwind CSS v3
-   Radix UI
-   Lucide React
-   Recharts
-   clsx, tailwind-merge, class-variance-authority

------------------------------------------------------------------------

## Prerequisites

Before running the project, ensure the following tools are installed:

-   Node.js version 18 or later
-   npm version 9 or later

Verify installation:

``` bash
node -v
npm -v
```

------------------------------------------------------------------------

## Installation

### Clone the repository

``` bash
git clone <your-repository-url>
cd MindBridge
```

### Install dependencies

``` bash
npm install
```

All data used in the application is mock data stored locally, so no
external APIs or environment variables are required.

------------------------------------------------------------------------

## Running the Application

Start the development server:

``` bash
npm run dev
```

Open in your browser:

http://localhost:5173

------------------------------------------------------------------------

## Available Scripts

``` bash
npm run dev
npm run build
npm run preview
```

------------------------------------------------------------------------

## Project Structure

    src/
    ├── app/
    │   ├── dashboard/
    │   ├── checkin/
    │   └── book-session/
    │
    ├── components/
    │   ├── layout/
    │   ├── ui/
    │   ├── dashboard/
    │   ├── checkin/
    │   └── booking/
    │
    ├── data/
    │   └── data.js
    │
    └── lib/
        └── utils.js

------------------------------------------------------------------------

## Routes

  Route           Description
  --------------- -------------------------
  /dashboard      Wellness dashboard
  /checkin        Daily check-in form
  /book-session   Therapy session booking

The root `/` redirects to `/dashboard`.

------------------------------------------------------------------------

## AI Assisted Development

This project was developed with assistance from Claude Code (Anthropic's
AI coding CLI) to help scaffold the project, translate Figma designs
into React components, and refine UI implementation.

------------------------------------------------------------------------

## Purpose

MindBridge demonstrates how modern frontend technologies can be used to
build empathetic digital health experiences with clean UI design,
responsive layouts, and intuitive user flows.
