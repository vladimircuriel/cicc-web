import type { FooterDTO } from '@lib/dto/footer.dto'
import { getFooter } from '@lib/fetch/footer.fetch'
import { useEffect, useState } from 'react'

export default function useFooter() {
  const [footerData, setFooterData] = useState<FooterDTO | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const [data, error] = await getFooter()
      if (error) throw error

      setFooterData(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return { footerData, isLoading }
}
