/** biome-ignore-all lint/suspicious/noArrayIndexKey: we have no id*/
import ArrowIcon from '@components/icons/ArrowIcon'
import type { QuestionDTO } from '@lib/dto/question.dto'
import useAccordion from '@lib/hooks/useAccordion'

type QuestionsAccordionProps = {
  questions: QuestionDTO[]
}

export default function QuestionsAccordion({ questions }: QuestionsAccordionProps) {
  const { openIndex, toggleAccordion } = useAccordion()

  return (
    <div>
      {questions?.map((question, index) => {
        const isOpen = openIndex === index

        return (
          <div key={index} className="px-4 bg-white">
            <h2 className="text-xl">
              <button
                type="button"
                className={`${index === 0 && 'rounded-t-3xl'} ${index + 1 !== questions.length && 'border-b-0'} flex items-center justify-between w-full p-5 font-medium rtl:text-right text-primary border border-gray-200 focus:ring-1 focus:ring-gray-200 hover:bg-gray-100 gap-3`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{question.question}</span>
                <ArrowIcon isOpen={isOpen} />
              </button>
            </h2>
            {isOpen && (
              <div
                className={`p-5 border ${index + 1 !== questions.length && 'border-b-0'}  border-gray-200`}
              >
                <p className="mb-2 text-black">{question.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
