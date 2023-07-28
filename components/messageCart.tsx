"use client";

import { Button } from "./ui/button";
import { Title } from "./ui/title";
import { Question, ShowMessage } from "@/types/quizQuestions";
import Image from "next/image";
import React from "react";

interface MessageCartProps {
  message: ShowMessage;
  currentQuestionId: number;
  currentQuestionIndex: number;
  currentQuestion: Question;
  toNextQuestion?: (index: number) => void;
}
export const MessageCart: React.FC<MessageCartProps> = ({ message, currentQuestion, currentQuestionIndex, toNextQuestion, currentQuestionId }) => {
  const handleContinue = () => {
    currentQuestion.showMessage = false;
    toNextQuestion?.(currentQuestionIndex + 1);
  };
  return (
    <div className="w-full max-w-[328px] flex flex-col justify-center items-center gap-y-9 h-full max-h-[455px] py-8 px-6 bg-white rounded-3xl">
      <div className="flex flex-col justify-center items-center gap-y-6">
        {message.id === 7 || message.id === 11 ? <Image src={message.src} alt="image" width={280} height={179} /> : null}
        {message.id === 11 && <Title className="text-lg leading-[24px] tracking-[0.32px] text-basic">{message.title}</Title>}
        <p className="text-[16px] font-sansMedium leading-[24px] tracking-[0.32px] text-left max-w-[280px] w-full">
          {message.subtitle} <span className="text-[#727AED] text-[16px] font-sansBold">{message.spanText} </span>
          {message.text}
        </p>
        {message.id === 14 || message.id === 19 ? <Image src={message.src} alt="image" width={280} height={179} /> : null}
      </div>
      <div className="w-full">
        <Button className="w-full max-w-[280px] h-[48px]" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
};
