import React, { useEffect, useState } from 'react'
import { Button } from './button'
import { cn } from '@/lib/utils';


interface QuestionButtonProps {
  answer: string;
  nextQuestion?: (data: string) => void;
}
export const AnswerButton: React.FC<QuestionButtonProps> = ({ answer, nextQuestion }) => {


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = event.target as HTMLDivElement;
    nextQuestion?.(eventTarget.innerText)
  }

  const firstLetterToUpperCase = (str: string) => {
    return str.charAt(0).toUpperCase() + answer.slice(1)
  }


  return (
    <div className='w-full max-w-[384px] h-full max-h-[48px] rounded-lg mb-3 px-4 md:px-0'>
      <Button
        onClick={handleClick}
        variant={'buttonPrimaryBlueDestructive'}
        className={cn(`justify-start w-full h-[48px] text-left rounded-lg text-[16px] tracking-[0.32px] leading-[24px] px-6`)}
      >
        {firstLetterToUpperCase(answer)}
      </Button>
    </div>
  )
}
