import React from 'react'
import { AnswerButton } from './ui/answerButtonButton'
import { AnswerOptions } from '@/types/quizQuestions'


interface QuestionsListProps {
  answers: AnswerOptions[] | undefined
  nextQuestion?: (data: string) => void;
}
export const AnswersList: React.FC<QuestionsListProps> = ({ answers, nextQuestion }) => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      {answers?.map((answer) => (
        <AnswerButton key={answer.id} answer={answer.answerText} nextQuestion={nextQuestion} />
      ))}
    </div>
  )
}
