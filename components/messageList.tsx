import React from "react";

import { showMessage } from "@/constants/questions";
import { Question, ShowMessage } from "@/types/quizQuestions";
import { MessageCart } from "./messageCart";

interface MessageListProps {
  currentQuestion: Question;
  currentQuestionId: number;
  currentQuestionIndex: number;
  toNextQuestion?: (index: number) => void;
}
export const MessageList: React.FC<MessageListProps> = ({ currentQuestionId, toNextQuestion, currentQuestion, currentQuestionIndex }) => {
  const showMessageCart: ShowMessage[] = showMessage;

  return (
    <>
      {showMessageCart.map(item => {
        return currentQuestionId === item.id ? (
          <MessageCart
            currentQuestionIndex={currentQuestionIndex}
            currentQuestion={currentQuestion}
            toNextQuestion={toNextQuestion}
            key={item.id}
            message={item}
            currentQuestionId={currentQuestionId}
          />
        ) : null;
      })}
    </>
  );
};
