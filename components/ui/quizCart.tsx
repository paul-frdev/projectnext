import React from 'react'
import { Title } from './title'
import { AnswersList } from '../answersListList'
import { Question } from '@/types/quizQuestions'


interface QuizCartProps {
  question: Question | null;
  nextQuestion?: (data: string) => void;
}
export const QuizCart: React.FC<QuizCartProps> = ({ question, nextQuestion }) => {
  return (
    <div className='w-full max-w-[792px] h-[431px] bg-quizCart rounded-t-[38px]'>
      <div className='flex justify-center items-center h-[107px] max-w-[792px] w-full bg-gradient-to-r from-[#727AED] to-[#5A60BA] rounded-t-[38px] mb-12'>
        <Title className='text-white text-[20px] tracking-[0.3px] leading-[28px]'>
          {question?.questionText}
        </Title>
      </div>
      <div>
        <AnswersList answers={question?.answerOptions} nextQuestion={nextQuestion} />
      </div>
    </div>
  )
}
