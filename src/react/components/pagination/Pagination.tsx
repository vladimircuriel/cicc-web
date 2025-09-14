/** biome-ignore-all lint/suspicious/noArrayIndexKey: we have no id */
import usePagination from '@lib/hooks/usePagination'

type PaginationProps = {
  page: number
  totalItems: number
  totalPages: number
  itemsPerPage: number
  onNext: () => void
  onPrev: () => void
  onGoToPage: (pageNumber: number) => void
}

export default function Pagination({
  page,
  totalItems,
  totalPages,
  itemsPerPage,
  onNext,
  onPrev,
  onGoToPage,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 my-8 text-white">
      <button
        type="button"
        className="transition-colors rounded-full size-10 bg-primary hover:bg-primary/80 disabled:cursor-not-allowed disabled:bg-gray-300"
        onClick={onPrev}
        disabled={page === 1}
        aria-label="Previous Page"
      >
        &lt;
      </button>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            type="button"
            key={index}
            className={`size-10 rounded-full transition-colors ${
              page === index + 1 ? 'bg-secondary' : 'bg-primary hover:bg-primary/80'
            }`}
            onClick={() => onGoToPage(index + 1)}
            aria-current={page === index + 1 ? 'page' : undefined}
            aria-label={`Go to page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="transition-colors rounded-full size-10 bg-primary hover:bg-primary/80 disabled:cursor-not-allowed disabled:bg-gray-300"
        onClick={onNext}
        disabled={page >= Math.ceil(totalItems / itemsPerPage)}
        aria-label="Next Page"
      >
        &gt;
      </button>
    </div>
  )
}
