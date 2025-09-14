import MemberCard from '@components/cards/memberCard/MemberCard'
import Loading from '@components/loading/Loading'
import Timeline from '@components/timeline/Timeline'
import Title from '@components/title/Title'
import useDirectivesPages from '@lib/hooks/useDirectivesPage'

export default function Page() {
  const { directivesData, isLoading } = useDirectivesPages()

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="container flex flex-col items-center mx-auto">
      <Title>Gestiones del CICC </Title>

      <div className="w-full my-5">
        {directivesData?.allDirectives && directivesData.allDirectives.length > 0 && (
          <Timeline years={directivesData.allDirectives} currentYear={directivesData.currentYear} />
        )}
      </div>

      {directivesData?.members && directivesData.members.length > 0 && (
        <div className="w-full my-5">
          <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-3">
            {directivesData.members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      )}

      {directivesData?.committeeImage && (
        <div className="w-full mb-20">
          <Title>Miembros</Title>

          <img
            src={directivesData.committeeImage}
            alt="Foto de los miembros del comité"
            className="h-[calc(35vh)] lg:h-[calc(70vh)] w-full p-4 shadow-lg rounded-3xl object-cover bg-white border border-gray-200"
          />
        </div>
      )}
    </div>
  )
}
