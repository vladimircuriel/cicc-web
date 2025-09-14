import { PUBLIC_API_URL, TOKEN } from '@lib/constants/settings'
import type { PaginatedActivitiesDTO } from '@lib/dto/activity.dto'
import fetcher from '@lib/utils/fetcher'
import useSWR from 'swr'

type useActivitiesPageProps = {
  page: number
  perPage?: number
}

export default function useActivitiesPage({ page, perPage = 5 }: useActivitiesPageProps) {
  const params = new URLSearchParams({ page: page.toString(), perPage: perPage.toString() })
  const url = `${PUBLIC_API_URL}endpoint-acf-activities?${params.toString()}`
  const headers = {
    Authorization: `Basic ${TOKEN}`,
    'Content-Type': 'application/json',
  }

  const { data, error, isLoading } = useSWR<PaginatedActivitiesDTO>(
    url,
    (url: string) => fetcher(url, { headers }),
    {
      dedupingInterval: 300_000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    },
  )

  return { paginatedActivitiesData: data || null, isLoading, error }
}
