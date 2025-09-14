import { PUBLIC_API_URL, TOKEN } from '@lib/constants/settings'
import type { PaginatedActivitiesDTO } from '@lib/dto/activity.dto'
import fetcher from '@lib/utils/fetcher'
import useSWR from 'swr'

type UseActivitiesPageProps = {
  page: number
  perPage?: number
}

export default function useActivitiesPage({ page = 1, perPage = 5 }: UseActivitiesPageProps) {
  const url = `${PUBLIC_API_URL}endpoint-acf-activities?page=${page}&${perPage}=5`
  const headers = {
    Authorization: `Basic ${TOKEN}`,
    'Content-Type': 'application/json',
  }

  const { data, error, isLoading } = useSWR<PaginatedActivitiesDTO>(
    url,
    (url: string) => fetcher(url, { headers }),
    {
      dedupingInterval: 300000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    },
  )

  return { paginatedActivitiesData: data || null, isLoading, error }
}
