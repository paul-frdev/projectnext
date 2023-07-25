'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { QuizCart } from './ui/quizCart'
import { QuizNav } from './quizNav'
import { mainQuestions, showMessage } from '@/constants/questions'
import { Question, ShowMessage } from '@/types/quizQuestions'
import { MessageList } from './messageList'

export const QuizList = () => {

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const [answers, setAnswers] = useState<string[]>([])

  const [countPoints, setCountPoints] = useState(0)
  const [secondPoints, setSecondPoints] = useState(0)

  console.log('countPoints', countPoints);
  console.log('secondPoints', secondPoints);
  console.log('currentQuestionIndex', currentQuestionIndex);



  const questionsData: Question[] = mainQuestions;

  const messageIndicesToShow = [5, 8, 10, 13];

  const showQuestion = useCallback((index: number) => {
    let curQuestion = questionsData[currentQuestionIndex]

    if (currentQuestionIndex === 0) {
      setCurrentQuestion(curQuestion);
      setCountPoints(0)
      setSecondPoints(0);
    } else {
      curQuestion = questionsData[index]
      setCurrentQuestion(curQuestion);
    }

  }, [currentQuestionIndex, questionsData]);



  const nextQuestion = useCallback((event: string) => {
    setAnswers([...answers, event]);
    setCurrentQuestionIndex((prev) => prev + 1);
    showQuestion(currentQuestionIndex + 1);
  }, [answers, currentQuestionIndex, showQuestion]);


  const prevQuestion = useCallback(() => {

    setCurrentQuestionIndex((prev) => prev - 1);
    if (currentQuestionIndex >= 1 && currentQuestionIndex <= 5) {
      setCountPoints(countPoints - 20)
    }

    if (currentQuestionIndex >= 6 && currentQuestionIndex <= 16) {
      setSecondPoints(secondPoints - 10)
    }

  }, [currentQuestionIndex])


  useEffect(() => {
    if (currentQuestionIndex >= 1 && currentQuestionIndex <= 5) {
      setCountPoints((prev) => prev + 20)
    }

    if (currentQuestionIndex >= 6 && currentQuestionIndex <= 16) {
      setSecondPoints((prev) => prev + 10)
    }

    showQuestion(currentQuestionIndex)
  }, [showQuestion, currentQuestionIndex]);



  return (
    <div className='w-full flex flex-col justify-center items-center gap-y-9'>
      <QuizNav
        prevQuestion={prevQuestion}
        disabled={currentQuestionIndex === 0}
        countPoints={countPoints}
        secondPoints={secondPoints}
        index={currentQuestionIndex}
      />
      {messageIndicesToShow.includes(currentQuestionIndex) ? (
        <MessageList 
        currentIndex={currentQuestionIndex} 
        setCurrentQuestionIndex={setCurrentQuestionIndex}/>
      ) : mainQuestions.length > currentQuestionIndex ? (
        <QuizCart
          question={currentQuestion}
          nextQuestion={nextQuestion}
        />
      ) : null}

    </div>
  )
}
