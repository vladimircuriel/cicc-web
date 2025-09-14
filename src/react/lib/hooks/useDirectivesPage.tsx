import { PUBLIC_API_URL, TOKEN } from '@lib/constants/settings'
import type { DirectiveDTO } from '@lib/dto/directive.dto'
import fetcher from '@lib/utils/fetcher'
import useSWR from 'swr'

export default function useDirectivesPages() {
  const year = new URLSearchParams(window.location.search).get('year')
  const url = `${PUBLIC_API_URL}endpoint-acf-directives?year=${year || ''}`
  const headers = {
    Authorization: `Basic ${TOKEN}`,
    'Content-Type': 'application/json',
  }

  const { data, error, isLoading } = useSWR<DirectiveDTO>(
    url,
    (url: string) => fetcher(url, { headers }),
    {
      dedupingInterval: 300_000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    },
  )

  return { directivesData: data || null, isLoading, error }
}
