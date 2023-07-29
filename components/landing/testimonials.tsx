"use client";

import { ReviewCart } from "../reviewCart";
import { Title } from "../ui/title";
import { Typography } from "../ui/typography";
import { DiscountCart } from "./discountCart";
import { reviews } from "@/constants";
import React from "react";

export const Testimonials = () => {
  return (
    <section className="mb-14 flex flex-col justify-center items-center">
      <Title className="text-[30px] tracking-[0.25px] mb-8">What people are saying about us</Title>
      <Typography className="text-[24px] font-sansRegular leading-[36px] tracking-[0.25px] text-basic mb-8">
        “ The Brytix team gave me the best knowledge to create my investment strategy.”
      </Typography>
      <div className="flex flex-col justify-center items-center mb-9">
        <ReviewCart data={reviews} />
      </div>
      <DiscountCart />
    </section>
  );
};
