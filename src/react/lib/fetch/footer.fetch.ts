import type { FooterDTO } from '@lib/dto/footer.dto'

const PUBLIC_API_URL = import.meta.env.PUBLIC_API_URL
const PUBLIC_API_USERNAME = import.meta.env.PUBLIC_API_USERNAME
const PUBLIC_API_PASSWORD = import.meta.env.PUBLIC_API_PASSWORD
const TOKEN = btoa(`${PUBLIC_API_USERNAME}:${PUBLIC_API_PASSWORD}`)

export const getFooter = async (): Promise<[FooterDTO | null, Error | null]> => {
  try {
    const response = await fetch(`${PUBLIC_API_URL}endpoint-acf-footer`, {
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
