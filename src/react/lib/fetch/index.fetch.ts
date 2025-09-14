import type { IndexDTO } from '@lib/dto/index.dto'

const PUBLIC_API_URL = import.meta.env.PUBLIC_API_URL
const PUBLIC_API_USERNAME = import.meta.env.PUBLIC_API_USERNAME
const PUBLIC_API_PASSWORD = import.meta.env.PUBLIC_API_PASSWORD
const TOKEN = btoa(`${PUBLIC_API_USERNAME}:${PUBLIC_API_PASSWORD}`)

export const getIndexPage = async (): Promise<[IndexDTO | null, Error | null]> => {
  try {
    const response = await fetch(`${PUBLIC_API_URL}endpoint-acf-index-page`, {
      headers: {
        Authorization: `Basic ${TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      return [null, new Error('Failed to fetch index page data')]
    }

    const data = await response.json()
    return [data, null]
  } catch (error) {
    return [null, error as Error]
  }
}
