import type { HeroDTO } from '@lib/dto/hero.dto'
import { getHero } from '@lib/fetch/hero.fetch'
import { useEffect, useState } from 'react'

export default function useHero() {
  const [heroData, setHeroData] = useState<HeroDTO | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const [data, error] = await getHero()
      if (error) throw error

      setHeroData(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return { heroData, isLoading }
}
