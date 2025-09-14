import { useCallback, useState } from 'react'

export default function usePagination() {
  const params = new URLSearchParams(window.location.search)
  const currentPage = parseInt(params.get('page') || '1', 10)
  const [page, setPage] = useState(currentPage)

  const scrollToActivities = () => {
    const el = document.getElementById('activities')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const updatePage = (newPage: number) => {
    params.set('page', newPage.toString())
    const newUrl = `${window.location.pathname}?${params.toString()}#activities`
    window.history.pushState({}, '', newUrl)
    setPage(newPage)
    scrollToActivities()
  }

  const handleNextPage = useCallback(() => {
    updatePage(page + 1)
  }, [page])

  const handlePrevPage = useCallback(() => {
    if (page > 1) updatePage(page - 1)
  }, [page])

  const handleGoToPage = useCallback((pageNumber: number) => {
    if (pageNumber >= 1) updatePage(pageNumber)
  }, [])

  return { page, handleNextPage, handlePrevPage, handleGoToPage }
}
