type AboutCardProps = {
  title: string
  description: string
}

export default function AboutCard({ title, description }: AboutCardProps) {
  return (
    <article className="flex flex-col items-center justify-center px-4 flex-color rounded-3xl bg-primary min-h-[360px] max-w-96">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-center text-white">{description}</p>
      </div>
    </article>
  )
}
