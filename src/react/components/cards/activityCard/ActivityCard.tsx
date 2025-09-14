import type { ActivityDTO } from '@lib/dto/activity.dto'

type ActivityProps = {
  activity: ActivityDTO
}

export default function ActivityCard({ activity }: ActivityProps) {
  return (
    <div className="flex items-center justify-center overflow-y-visible">
      <div className="flex drop-shadow-xl flex-col items-center min-h-40 w-64 lg:min-h-[350px] lg:min-w-[390px] rounded-3xl bg-accent-light">
        <img
          className="w-56 h-36 m-4 lg:w-[320px] lg:h-44 rounded-2xl"
          src={activity.coverImage}
          alt={activity.name}
          loading="lazy"
          decoding="async"
        />
        <h2 className="mb-3 text-3xl font-semibold text-center lg:mb-0 text-primary">
          {activity.name}
        </h2>
        {activity.href && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={activity.href}
            className="w-[90%] p-2 mt-9 mb-4 lg:mb-0 text-xl font-medium text-center transition-all rounded-2xl bg-primary hover:scale-105 hover:bg-primary/90"
          >
            <span className="text-white">Ver más</span>
          </a>
        )}
      </div>
    </div>
  )
}
