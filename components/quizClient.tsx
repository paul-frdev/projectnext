"use client";

import { QuizList } from "./quizList";
import { Container } from "./ui/container";
import React from "react";

export const QuizClient = () => {
  return (
    <section>
      <Container className=" w-full flex justify-center items-start">
        <QuizList />
      </Container>
    </section>
  );
};
