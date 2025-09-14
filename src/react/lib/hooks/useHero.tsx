import { PUBLIC_API_URL, TOKEN } from '@lib/constants/settings'
import type { HeroDTO } from '@lib/dto/hero.dto'
import fetcher from '@lib/utils/fetcher'
import useSWR from 'swr'

export default function useHero() {
  const url = `${PUBLIC_API_URL}endpoint-acf-current-committee`
  const headers = {
    Authorization: `Basic ${TOKEN}`,
    'Content-Type': 'application/json',
  }

  const { data, error, isLoading } = useSWR<HeroDTO>(
    url,
    (url: string) => fetcher(url, { headers }),
    {
      dedupingInterval: 300000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    },
  )

  return { heroData: data || null, isLoading, error }
}
