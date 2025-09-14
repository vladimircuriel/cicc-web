import Activity from '@components/activity/Activity'
import Title from '@components/title/Title'
import useActivitiesPage from '@lib/hooks/useActivitiesPage'

export default function Page() {
  const { paginatedActivitiesData, isLoading } = useActivitiesPage({ page: 1, perPage: 5 })

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <div id="activities" className="relative">
        <Title>Nuestras Actividades</Title>

        <div className="flex flex-col items-center justify-center gap-8">
          {paginatedActivitiesData?.data.map((activity, index) => (
            <Activity key={activity.name} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
