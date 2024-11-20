import { defineEventHandler } from 'h3'

// Helper function to format date
function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', { 
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  }).format(date)
}

// Get current month's schedule
const currentDate = new Date()
const currentMonth = currentDate.getMonth()
const currentYear = currentDate.getFullYear()

// Generate dates for the current month
const schedule = []
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

for (let day = 1; day <= daysInMonth; day++) {
  const date = new Date(currentYear, currentMonth, day)
  
  // Only add matches for weekends and Wednesdays
  if (date.getDay() === 3 || date.getDay() === 6 || date.getDay() === 0) {
    schedule.push({
      id: day,
      date: formatDate(date),
      fullDate: date.toISOString(),
      team1: ['Manchester United', 'Arsenal', 'Liverpool', 'Chelsea', 'Manchester City'][Math.floor(Math.random() * 5)],
      team2: ['Tottenham', 'Newcastle', 'Everton', 'West Ham', 'Brighton'][Math.floor(Math.random() * 5)],
      time: ['12:30', '15:00', '17:30', '20:00'][Math.floor(Math.random() * 4)],
      competition: ['Premier League', 'FA Cup', 'Champions League'][Math.floor(Math.random() * 3)],
      status: date > currentDate ? 'upcoming' : 'live'
    })
  }
}

export default defineEventHandler(() => schedule)