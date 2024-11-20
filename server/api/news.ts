import { defineEventHandler } from 'h3'

const demoArticles = [
  {
    id: 1,
    title: 'Champions League Quarter-Final Draw Revealed',
    excerpt: 'Exciting matchups ahead as Europe\'s elite teams learn their fate in the Champions League quarter-finals.',
    content: `
      <p>The Champions League quarter-final draw has produced some mouth-watering ties, setting up what promises to be an exciting conclusion to Europe's premier club competition.</p>
      
      <h2>Key Matchups</h2>
      <p>The draw has paired some of football's biggest names, with several intriguing storylines emerging from the potential matchups. The first leg of the quarter-finals will be played in early April, with the return fixtures scheduled for the following week.</p>
      
      <h2>Road to the Final</h2>
      <p>The winners of these ties will progress to the semi-finals, with the ultimate goal being the final at Wembley Stadium in London. Teams will be looking to make their mark on Europe's biggest stage.</p>
      
      <h2>Expert Analysis</h2>
      <p>Football pundits have already begun analyzing the matchups, with many highlighting the tactical battles that could decide these crucial games. The quarter-finals often produce some of the tournament's most memorable moments.</p>
    `,
    image: 'https://placehold.co/800x400?text=Champions+League+Draw',
    category: 'Champions League',
    date: '2024-04-03T10:00:00Z',
    featured: true
  },
  {
    id: 2,
    title: 'Star Striker Sets New Scoring Record',
    excerpt: 'Remarkable achievement as premier league striker breaks long-standing scoring record.',
    content: `
      <p>A historic moment in football as the Premier League witnesses a new scoring record being set, marking a significant milestone in the sport's history.</p>
      
      <h2>Record-Breaking Performance</h2>
      <p>The striker's consistency throughout the season has been remarkable, with goals coming against all types of opposition. This achievement puts them in the record books alongside some of football's greatest names.</p>
      
      <h2>Manager's Praise</h2>
      <p>The team's manager has praised the striker's dedication and professionalism, highlighting their importance to the team's success this season.</p>
    `,
    image: 'https://placehold.co/800x400?text=Scoring+Record',
    category: 'Premier League',
    date: '2024-04-02T15:30:00Z',
    featured: false
  },
  {
    id: 3,
    title: 'Major Transfer Deal Announced',
    excerpt: 'Top club secures signature of highly-rated midfielder in record-breaking deal.',
    content: `
      <p>A major transfer has been announced that could reshape the competitive landscape of European football. The deal represents one of the largest transfers in recent history.</p>
      
      <h2>Transfer Details</h2>
      <p>The midfielder joins on a long-term contract, with the transfer fee reportedly breaking the club's previous record. The player's versatility and experience were key factors in the deal.</p>
      
      <h2>Future Impact</h2>
      <p>This signing is expected to significantly strengthen the team's midfield options and could prove crucial in their pursuit of major honors this season.</p>
    `,
    image: 'https://placehold.co/800x400?text=Transfer+News',
    category: 'Transfers',
    date: '2024-04-01T09:15:00Z',
    featured: false
  }
]

export default defineEventHandler(() => demoArticles)