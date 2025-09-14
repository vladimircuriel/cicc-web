import type { ActivityDTO } from '@lib/dto/activity.dto'

type ActivityProps = {
  activity: ActivityDTO
  index: number
}

export default function Activity({ activity, index }: ActivityProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between gap-8 mb-24 ${
        index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className="flex flex-col max-w-xl space-y-6">
        <h2
          className={`text-3xl font-semibold text-primary w-full text-center lg:text-start  ${index % 2 === 0 && 'lg:text-end'} `}
        >
          {activity?.name}
        </h2>
        <p
          className={`text-lg text-gray-700 w-full text-center lg:text-start  ${index % 2 === 0 && 'lg:text-end'} `}
        >
          {activity?.description}
        </p>
        {activity?.href && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={activity?.href}
            className="w-full p-2 text-center transition-all rounded-2xl bg-primary hover:scale-105 hover:bg-primary/90"
          >
            <span className="text-xl font-medium text-white ">Ver actividad</span>
          </a>
        )}
      </div>
      <div className="flex-shrink-0 transition-transform border border-gray-300 drop-shadow-lg rounded-2xl hover:scale-105">
        <a target="_blank" rel="noopener noreferrer" href={activity?.href}>
          <img
            className="w-70 h-auto lg:w-[520px] lg:h-[300px] rounded-2xl"
            src={activity?.eventImage || activity?.coverImage}
            alt={activity?.name}
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </div>
  )
}
