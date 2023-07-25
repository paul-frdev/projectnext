import { showMessage } from '@/constants/questions';
import { ShowMessage } from '@/types/quizQuestions';
import React from 'react'
import { MessageCart } from './messageCart';


interface MessageListProps {
  currentIndex?: number;
  setCurrentQuestionIndex?: (index: number) => void;
}
export const MessageList: React.FC<MessageListProps> = ({ currentIndex, setCurrentQuestionIndex }) => {

  const showMessageCart: ShowMessage[] = showMessage;
  return (
    <>
      {showMessageCart.map((item) => {
        return (
          currentIndex === item.id ? <MessageCart setCurrentQuestionIndex={setCurrentQuestionIndex} key={item.id} message={item} currentIndex={currentIndex} /> : null
        )
      })}
    </>
  )
}
