import React from 'react'
import { Button } from './button'


interface QuestionButtonProps {
  answer: string;
  nextQuestion?: (data: string) => void;
}
export const AnswerButton: React.FC<QuestionButtonProps> = ({ answer, nextQuestion }) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = event.target as HTMLDivElement;
    nextQuestion?.(eventTarget.innerText)
  }


  return (
    <div className='w-full max-w-[384px] h-full max-h-[48px] rounded-lg mb-3 px-4 md:px-0'>
      <Button
        onClick={handleClick}
        variant='buttonPrimaryBlueDestructive'
        className='w-full h-[48px] text-left rounded-lg text-[16px] tracking-[0.32px] leading-[24px] px-6'
      >
        {answer}
      </Button>
    </div>
  )
}
