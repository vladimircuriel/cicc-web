import Activity from '@components/activity/Activity'
import Pagination from '@components/pagination/Pagination'
import Title from '@components/title/Title'
import useActivitiesPage from '@lib/hooks/useActivitiesPage'
import usePagination from '@lib/hooks/usePagination'

export default function Page() {
  const { page, handleNextPage, handlePrevPage, handleGoToPage } = usePagination()
  const { paginatedActivitiesData, isLoading, error } = useActivitiesPage({ page, perPage: 5 })

  return (
    <div className="container flex flex-col items-center mx-auto">
      <div id="activities" className="relative">
        <Title>Nuestras Actividades</Title>

        <div className="flex flex-col items-center gap-8">
          {paginatedActivitiesData?.data.map((activity, index) => (
            <Activity key={activity.name} activity={activity} index={index} />
          ))}
        </div>

        <Pagination
          page={page}
          totalItems={paginatedActivitiesData?.pagination.total || 0}
          totalPages={paginatedActivitiesData?.pagination.totalPages || 0}
          itemsPerPage={paginatedActivitiesData?.pagination.perPage || 5}
          onNext={handleNextPage}
          onPrev={handlePrevPage}
          onGoToPage={handleGoToPage}
        />
      </div>
    </div>
  )
}
