import { defineEventHandler } from 'h3'

const articles = [
  {
    id: 1,
    title: 'Transfer News: Star Player on the Move',
    excerpt: 'Latest updates on the biggest transfer saga of the season as top clubs battle for signature.',
    content: 'Full article content here...',
    image: 'https://placehold.co/800x400?text=Transfer+News',
    category: 'Transfers',
    date: '2024-04-03T10:00:00Z',
    featured: true,
    link: '/news/1'
  },
  {
    id: 2,
    title: 'Match Analysis: Tactical Breakdown',
    excerpt: 'Deep dive into yesterday\'s tactical masterclass and what it means for the title race.',
    content: 'Full article content here...',
    image: 'https://placehold.co/800x400?text=Match+Analysis',
    category: 'Analysis',
    date: '2024-04-02T15:30:00Z',
    featured: false,
    link: '/news/2'
  },
  {
    id: 3,
    title: 'Injury Update: Key Player Returns',
    excerpt: 'Team receives boost as star player returns to training ahead of crucial fixtures.',
    content: 'Full article content here...',
    image: 'https://placehold.co/800x400?text=Injury+Update',
    category: 'Team News',
    date: '2024-04-02T09:15:00Z',
    featured: false,
    link: '/news/3'
  },
  {
    id: 4,
    title: 'Youth Academy Prospect Signs Professional Contract',
    excerpt: 'Exciting young talent commits future to the club with new long-term deal.',
    content: 'Full article content here...',
    image: 'https://placehold.co/800x400?text=Youth+Academy',
    category: 'Youth',
    date: '2024-04-01T14:20:00Z',
    featured: false,
    link: '/news/4'
  },
  {
    id: 5,
    title: 'Manager Press Conference: Pre-Match Insights',
    excerpt: 'Key quotes and team news from the manager\'s pre-match press conference.',
    content: 'Full article content here...',
    image: 'https://placehold.co/800x400?text=Press+Conference',
    category: 'Team News',
    date: '2024-04-01T11:45:00Z',
    featured: false,
    link: '/news/5'
  },
  {
    id: 6,
    title: 'Stadium Expansion Plans Revealed',
    excerpt: 'Club announces ambitious plans for stadium development and improvement.',
    content: 'Full article content here...',
    image: 'https://placehold.co/800x400?text=Stadium+News',
    category: 'Club News',
    date: '2024-03-31T16:00:00Z',
    featured: false,
    link: '/news/6'
  }
]

export default defineEventHandler(() => articles)