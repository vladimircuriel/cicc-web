import type { PaginationDTO } from './pagination.dto'

export type PaginatedActivitiesDTO = {
  data: ActivityDTO[]
  pagination: PaginationDTO
}

export type ActivityDTO = {
  name: string
  description: string
  href: string
  coverImage: string
  eventImage: string
  date: Date
  year: number
}
