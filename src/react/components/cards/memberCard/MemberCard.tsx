import type { MemberDTO } from '@lib/dto/member.dto'

type MemberCardProps = {
  member: MemberDTO
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white border border-gray-300 shadow-md gap-y-1 rounded-2xl">
      {member.href && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={member.href}
          className="flex flex-col items-center transition-transform hover:scale-105"
        >
          <img
            src={member.image}
            alt={member.name}
            className="size-64 rounded-2xl"
            loading="lazy"
            decoding="async"
          />
        </a>
      )}
      {!member.href && (
        <img
          src={member.image}
          alt={member.name}
          className="size-64 rounded-2xl"
          loading="lazy"
          decoding="async"
        />
      )}

      <h3 className="mt-4 text-xl font-bold text-primary">
        {member.name} {member.lastName}
      </h3>
      <p className="-mt-1 font-medium text-primary">{member.role}</p>
      {member.href && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={member.href}
          className="w-[90%] py-2 text-xl mt-2 font-medium text-center transition-transform rounded-full bg-secondary hover:scale-105 hover:bg-secondary/80"
        >
          <span className="text-lg font-semibold text-white">Ver LinkedIn</span>
        </a>
      )}
    </div>
  )
}
