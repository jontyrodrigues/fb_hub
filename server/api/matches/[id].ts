import { defineEventHandler } from 'h3'
import axios from 'axios'

const SPORTMONKS_API_KEY = 'h0lSlnfpvMqHCg4LazBv16RQG6sUrbnp7M5xdUuTiDwOulKrjIHQboQIo0n1'

const handleAxiosError = (error) => {
  console.error('API Error:', error.message)
  throw createError({
    statusCode: error.response?.status || 500,
    statusMessage: error.message
  })
}

export default defineEventHandler(async (event) => {
  const id = event.context.params.id
  
  try {
    const response = await axios({
      method: 'get',
      url: `https://alinetech.net/api/sportmonk/football/${id}`,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': SPORTMONKS_API_KEY
      },
      timeout: 30000
    })

    if (!response.data) {
      throw createError({
        statusCode: 404,
        message: 'Match not found'
      })
    }

    return response.data
  } catch (error) {
    handleAxiosError(error)
  }
})