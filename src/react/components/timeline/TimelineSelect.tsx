type TimelineSelectProps = {
  years: number[]
  currentYear: number
}

export default function TimelineSelect({ years, currentYear }: TimelineSelectProps) {
  return (
    <div className="flex justify-center w-full p-4 bg-white lg:hidden">
      <select
        className="w-full p-2 font-semibold border-2 rounded-lg border-secondary text-primary"
        value={currentYear}
        onChange={(e) => {
          const year = e.target.value
          window.location.href = `/gestiones?year=${year}`
        }}
      >
        {years.map((year) => (
          <option key={year} value={year} className="text-center">
            {year}
          </option>
        ))}
      </select>
    </div>
  )
}
