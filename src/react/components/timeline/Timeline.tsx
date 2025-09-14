type TimelineProps = {
  years: number[]
  currentYear: number
}

export default function Timeline({ years, currentYear }: TimelineProps) {
  return (
    <div className="relative flex flex-row-reverse items-center justify-evenly">
      <div className="absolute inset-0 flex items-center mx-auto">
        <div className="relative w-full h-[2px] bg-primary">
          <div className="absolute -left-[7px] -top-[25px] size-14 bg-white rounded-full flex items-center p-px border-2 border-secondary justify-center">
            <div className="rounded-full size-12 bg-primary"></div>
          </div>
          <div className="absolute -right-[7px] -top-[25px] size-14 bg-white rounded-full flex items-center p-px border-2 border-secondary justify-center">
            <div className="rounded-full size-12 bg-primary"></div>
          </div>
        </div>
      </div>
      {years.map((year) => (
        <a
          href={`/gestiones?year=${year}`}
          className="z-10 transition-transform transform hover:scale-105"
        >
          <div className="size-22 bg-white rounded-full flex items-center p-1 border-[3px] border-secondary justify-center">
            <div
              className={`size-20 ${currentYear === year ? 'bg-secondary' : 'bg-primary'}  rounded-full flex items-center p-10  justify-center text-white`}
            >
              <h3 className="text-lg font-semibold">{year}</h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
