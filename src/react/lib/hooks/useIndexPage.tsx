import { PUBLIC_API_URL, TOKEN } from '@lib/constants/settings'
import type { IndexDTO } from '@lib/dto/index.dto'
import fetcher from '@lib/utils/fetcher'
import useSWR from 'swr'

export default function useIndexPage() {
  const url = `${PUBLIC_API_URL}endpoint-acf-index-page`
  const headers = {
    Authorization: `Basic ${TOKEN}`,
    'Content-Type': 'application/json',
  }

  const { data, error, isLoading } = useSWR<IndexDTO>(
    url,
    (url: string) => fetcher(url, { headers }),
    {
      dedupingInterval: 300000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    },
  )

  return { indexData: data || null, isLoading, error }
}
