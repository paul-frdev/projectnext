'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { QuizCart } from './ui/quizCart'
import { QuizNav } from './quizNav'
import { mainQuestions } from '@/constants/questions'
import { Question } from '@/types/quizQuestions'
import { MessageList } from './messageList'
import { useRouter } from 'next/navigation'

export const QuizList = () => {

  const [currentQuestion, setCurrentQuestion] = useState<Question | any>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const [answers, setAnswers] = useState<string[]>([])

  const [countPoints, setCountPoints] = useState(0)
  const [secondPoints, setSecondPoints] = useState(0)


  const router = useRouter()

  // console.log('countPoints', countPoints);
  // console.log('secondPoints', secondPoints);
  // console.log('currentQuestionIndex', currentQuestionIndex);
  // console.log('currentQuestion', currentQuestion);
  // console.log('currentQuestion?.showMessageCart', currentQuestion?.showMessageCart, currentQuestion?.id);
  // console.log('currentQuestionid', currentQuestion?.id);
  // console.log('answers', answers);



  const questionsData: Question[] = mainQuestions;

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

    if (currentQuestionIndex === 20) {
      router.push('/enter-email')
    }

  }, [currentQuestionIndex, questionsData, router]);



  const nextQuestion = useCallback((event: string) => {
    setAnswers([...answers, event]);
    setCurrentQuestionIndex((prev) => prev + 1);
    showQuestion(currentQuestionIndex + 1);

  }, [answers, currentQuestionIndex, showQuestion]);


  const backShowNextQuestion = (index: number) => {
    setCurrentQuestionIndex((prev) => prev + 1);
    showQuestion(index + 1)
  }


  const prevQuestion = useCallback(() => {

    setCurrentQuestionIndex((prev) => prev - 1);
    if (currentQuestionIndex >= 1 && currentQuestionIndex <= 5) {
      setCountPoints(countPoints - 20)
    }

    if (currentQuestionIndex >= 6 && currentQuestionIndex <= 20) {
      setSecondPoints(secondPoints - 7)
    }

  }, [currentQuestionIndex])


  useEffect(() => {
    if (currentQuestionIndex >= 1 && currentQuestionIndex <= 5) {
      setCountPoints((prev) => prev + 20)
    }

    if (currentQuestionIndex >= 6 && currentQuestionIndex <= 20) {
      setSecondPoints((prev) => prev + 7)
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
      {currentQuestion?.showMessageCart ? (
        <MessageList
          currentQuestionId={currentQuestion?.id}
          currentQuestion={currentQuestion}
          toNextQuestion={backShowNextQuestion}
          currentQuestionIndex={currentQuestionIndex}
        />
      ) : mainQuestions.length > currentQuestionIndex ? (
        <QuizCart
          question={currentQuestion}
          nextQuestion={nextQuestion}
        />
      ) : null}

    </div>
  )
}
