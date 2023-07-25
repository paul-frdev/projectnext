import React from 'react'
import { QuestionButton } from './ui/questionButton'
import { AnswerOptions } from '@/types/quizQuestions'


interface QuestionsListProps {
  answers: AnswerOptions[] | undefined
  nextQuestion?: (data: string) => void;
}
export const QuestionsList: React.FC<QuestionsListProps> = ({ answers, nextQuestion }) => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      {answers?.map((answer) => (
        <QuestionButton key={answer.id} answer={answer.answerText} nextQuestion={nextQuestion} />
      ))}
    </div>
  )
}
