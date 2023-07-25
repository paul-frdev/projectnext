import React from 'react'
import { Button } from './button'
import { AnswerOptions } from '@/types/quizQuestions'


interface QuestionButtonProps {
  answer: string;
  nextQuestion?: (data: string) => void;
}
export const QuestionButton: React.FC<QuestionButtonProps> = ({ answer, nextQuestion }) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = event.target as HTMLDivElement;
    nextQuestion?.(eventTarget.innerText)
  }


  return (
    <div className='w-full max-w-[384px] h-full max-h-[48px] rounded-lg mb-6 last:mb-12'>
      <Button
        onClick={handleClick}
        variant='buttonPrimaryBlueDestructive'
        className='w-full rounded-lg text-[16px] tracking-[0.32px] leading-[24px] px-6'
      >
        {answer}
      </Button>
    </div>
  )
}
