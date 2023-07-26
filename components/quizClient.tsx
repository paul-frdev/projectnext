'use client'

import React from 'react'
import { QuizList } from './quizList'
import { Container } from './ui/container'

export const QuizClient = () => {
  return (
    <section>
      <Container className=' w-full flex justify-center items-start'>
        <QuizList />
      </Container>
    </section>
  )
}
