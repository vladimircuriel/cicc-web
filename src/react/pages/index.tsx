import QuestionsAccordion from '@components/accordion/QuestionsAccordion'
import AboutCard from '@components/cards/aboutCard/AboutCard'
import ActivityCard from '@components/cards/activityCard/ActivityCard'
import MemberCard from '@components/cards/memberCard/MemberCard'
import ImageDivider from '@components/divider/ImageDivider'
import SemicolonIcon from '@components/icons/SemicolonIcon'
import SwiperComponent from '@components/swiper/Swiper'
import Title from '@components/title/Title'
import useIndexPage from '@lib/hooks/useIndexPage'

export default function Page() {
  const { indexData, isLoading } = useIndexPage()
  const { cards = [], activities = [], members = [], questions = [] } = indexData || {}

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <div id="about" className="relative">
        <Title>Nosotros</Title>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {cards?.map((card) => (
            <AboutCard key={card.slug} title={card.title} description={card.description} />
          ))}
        </div>

        <div className="hidden lg:block absolute bottom-[-60px] right-[-100px]">
          <SemicolonIcon />
        </div>
      </div>

      <div className="w-full my-10">
        <Title>Actividades</Title>

        <SwiperComponent>
          {activities.map((activity) => (
            <ActivityCard key={activity.name} activity={activity} />
          ))}
        </SwiperComponent>
      </div>

      <ImageDivider />

      <div className="w-full my-10">
        <Title>Directiva</Title>

        <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-3">
          {members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      <div className="w-full mb-20">
        <Title>Miembros</Title>

        <img
          src="/hero.webp"
          alt="Foto de los miembros del comité"
          className="h-[calc(35vh)] lg:h-[calc(70vh)] w-full p-4 shadow-lg rounded-3xl object-cover bg-white border border-gray-200"
        />
      </div>

      <ImageDivider />

      <div className="w-full my-10">
        <Title>Preguntas Frecuentes</Title>

        <QuestionsAccordion questions={questions} />
      </div>
    </div>
  )
}
