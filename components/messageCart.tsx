import { ShowMessage } from '@/types/quizQuestions'
import React from 'react'
import { Typography } from './ui/typography';
import Image from 'next/image';
import { Button } from './ui/button';

interface MessageCartProps {
  message: ShowMessage
  currentIndex?: number;
  setCurrentQuestionIndex?: (index: number) => void;
}
export const MessageCart: React.FC<MessageCartProps> = ({ message, setCurrentQuestionIndex }) => {
  return (
    <div className='w-full max-w-[328px] flex flex-col justify-center items-center gap-y-9 h-full max-h-[455px] py-8 px-6 bg-white'>
      <div>
        {message.id === 5 || message.id === 8 ? <Image src={message.src} alt='image' width={280} height={179} /> : null}
        <p>{message.subtitle} <span>{message.spanText}</span> {message.text} </p>
      </div>
      <div>
        <Button onClick={() => setCurrentQuestionIndex?.((prev: number) => prev + 1)}>Continue</Button>
      </div>
    </div>
  )
}
