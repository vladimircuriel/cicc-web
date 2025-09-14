import type { QuestionDTO } from '@lib/dto/question.dto'
import type { ActivityDTO } from './activity.dto'
import type { CardDTO } from './cards.dto'
import type { MemberDTO } from './member.dto'

export type IndexDTO = {
  cards: CardDTO[]
  activities: ActivityDTO[]
  members: MemberDTO[]
  questions: QuestionDTO[]
  currentCommitteeImage: string
}
