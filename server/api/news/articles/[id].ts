import { defineEventHandler } from 'h3'

const articles = {
  1: {
    id: 1,
    title: 'Transfer News: Star Player on the Move',
    excerpt: 'Latest updates on the biggest transfer saga of the season as top clubs battle for signature.',
    content: `
      <p>In a stunning development that has sent shockwaves through the football world, star player John Doe is reportedly on the verge of a record-breaking transfer move. Multiple sources close to the situation have confirmed that negotiations are in advanced stages.</p>
      
      <h2>The Background</h2>
      <p>John Doe, who has been instrumental in his club's success over the past three seasons, has attracted interest from several top European clubs. His exceptional performance in the Champions League, where he scored 15 goals in 12 appearances, has only intensified the speculation about his future.</p>
      
      <h2>The Numbers</h2>
      <p>The proposed transfer fee is expected to break the current world record, with figures reportedly reaching €200 million. This would surpass the previous record set in 2021.</p>
      
      <h2>What's Next</h2>
      <p>While the player's current club has maintained their stance that he is not for sale, industry insiders suggest that a deal could be completed before the end of the transfer window. The player's representatives are expected to meet with club officials in the coming days to discuss the situation.</p>
      
      <p>This is a developing story, and we will provide updates as more information becomes available.</p>
    `,
    image: 'https://placehold.co/800x400?text=Transfer+News',
    category: 'Transfers',
    date: '2024-04-03T10:00:00Z',
    featured: true
  },
  2: {
    id: 2,
    title: 'Match Analysis: Tactical Breakdown',
    excerpt: 'Deep dive into yesterday\'s tactical masterclass and what it means for the title race.',
    content: `
      <p>Yesterday's match between City FC and United FC provided a fascinating tactical battle that could have significant implications for the title race. Let's break down the key aspects that influenced the outcome.</p>
      
      <h2>Formation and Setup</h2>
      <p>City FC opted for their usual 4-3-3 formation but with a subtle twist in the midfield positioning. The defensive midfielder was given more license to push forward, creating overloads in the central areas.</p>
      
      <h2>Key Tactical Battles</h2>
      <p>The most interesting aspect of the match was the battle on the flanks. United's wide players were forced to defend deep, limiting their counter-attacking opportunities. This tactical adjustment proved crucial in City's dominance of possession.</p>
      
      <h2>Impact on the Title Race</h2>
      <p>With this victory, City FC has now closed the gap at the top of the table to just two points. Their remaining fixtures appear more favorable than their rivals, suggesting we could be in for an exciting finish to the season.</p>
    `,
    image: 'https://placehold.co/800x400?text=Match+Analysis',
    category: 'Analysis',
    date: '2024-04-02T15:30:00Z',
    featured: false
  },
  3: {
    id: 3,
    title: 'Injury Update: Key Player Returns',
    excerpt: 'Team receives boost as star player returns to training ahead of crucial fixtures.',
    content: `
      <p>In a significant boost to the team's prospects, star midfielder James Smith has returned to full training after a three-month injury layoff. The player's return comes at a crucial time as the team prepares for a demanding run of fixtures.</p>
      
      <h2>Recovery Process</h2>
      <p>Smith has undergone an intensive rehabilitation program following his knee injury. The medical team has expressed satisfaction with his progress and recovery timeline.</p>
      
      <h2>Impact on Team</h2>
      <p>The midfielder's return could prove crucial for the upcoming matches. His ability to control the tempo of the game and create chances has been sorely missed during his absence.</p>
      
      <h2>Manager's Comments</h2>
      <p>"We're delighted to have James back in training," said the manager. "He's a key player for us, and his return gives us more options in midfield. However, we'll be careful with his reintegration to avoid any setbacks."</p>
    `,
    image: 'https://placehold.co/800x400?text=Injury+Update',
    category: 'Team News',
    date: '2024-04-02T09:15:00Z',
    featured: false
  }
}

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params.id)
  return articles[id] || null
})