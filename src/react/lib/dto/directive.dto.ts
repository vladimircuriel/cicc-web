import type { MemberDTO } from './member.dto'

export type DirectiveDTO = {
  allDirectives: number[]
  currentYear: number
  members: MemberDTO[]
  committeeImage: string
}
