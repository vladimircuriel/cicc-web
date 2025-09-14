import type { HeroDTO } from '@lib/dto/hero.dto'

const PUBLIC_API_URL = import.meta.env.PUBLIC_API_URL
const PUBLIC_API_USERNAME = import.meta.env.PUBLIC_API_USERNAME
const PUBLIC_API_PASSWORD = import.meta.env.PUBLIC_API_PASSWORD
const TOKEN = btoa(`${PUBLIC_API_USERNAME}:${PUBLIC_API_PASSWORD}`)

export const getHero = async (): Promise<[HeroDTO | null, Error | null]> => {
  try {
    const response = await fetch(`${PUBLIC_API_URL}endpoint-acf-current-committee`, {
      headers: {
        Authorization: `Basic ${TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      return [null, new Error('Failed to fetch footer data')]
    }

    const data = await response.json()

    return [data, null]
  } catch (error) {
    return [null, error as Error]
  }
}
