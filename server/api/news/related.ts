import { defineEventHandler } from 'h3'
import axios from 'axios'

const handleAxiosError = (error) => {
  console.error('API Error:', {
    message: error.message,
    status: error.response?.status,
    data: error.response?.data
  })

  throw createError({
    statusCode: error.response?.status || 500,
    message: 'Unable to fetch related articles. Please try again later.',
    fatal: true
  })
}

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const { articleId, category } = query
    
    console.log('🔍 Fetching related articles:', { articleId, category })
    
    const response = await axios({
      method: 'get',
      url: 'https://alinetech.net/api/sportmonk/news/related',
      params: { articleId, category },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 30000
    })

    if (!response.data) {
      console.log('⚠️ No related articles found')
      return []
    }

    console.log('✅ Successfully fetched related articles:', response.data.length)
    return response.data
  } catch (error) {
    handleAxiosError(error)
  }
})