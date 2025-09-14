import { PUBLIC_API_URL, TOKEN } from '@lib/constants/settings'
import type { FooterDTO } from '@lib/dto/footer.dto'
import fetcher from '@lib/utils/fetcher'
import useSWR from 'swr'

export default function useFooter() {
  const url = `${PUBLIC_API_URL}endpoint-acf-footer`
  const headers = {
    Authorization: `Basic ${TOKEN}`,
    'Content-Type': 'application/json',
  }

  const { data, error, isLoading } = useSWR<FooterDTO>(
    url,
    (url: string) => fetcher(url, { headers }),
    {
      dedupingInterval: 300000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    },
  )

  return { footerData: data || null, isLoading, error }
}
