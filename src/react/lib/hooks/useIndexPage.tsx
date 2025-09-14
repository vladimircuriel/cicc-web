import type { IndexDTO } from '@lib/dto/index.dto'
import { getIndexPage } from '@lib/fetch/index.fetch'
import { useEffect, useState } from 'react'

export default function useIndexPage() {
  const [indexData, setIndexData] = useState<IndexDTO | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const [data, error] = await getIndexPage()
      if (error) throw error

      setIndexData(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return { indexData, isLoading }
}
