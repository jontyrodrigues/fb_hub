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
    message: 'Unable to fetch matches. Please try again later.',
    fatal: true
  })
}

export default defineEventHandler(async (event) => {
  try {
    console.log('🔍 Fetching live matches...')
    
    const response = await axios({
      method: 'get',
      url: 'https://alinetech.net/api/sportmonk/football',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      timeout: 30000
    })

    if (!response.data) {
      console.log('⚠️ No matches found')
      return []
    }

    console.log('✅ Successfully fetched matches:', response.data.length)
    return response.data
  } catch (error) {
    handleAxiosError(error)
  }
})