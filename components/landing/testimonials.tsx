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
      <Title className="text-[30px] md:text-[36px] tracking-[0.25px] mb-8 md:mb-14 text-center">What people are saying about us</Title>
      <div className="flex lg:grid lg:grid-cols-2 gap-y-8 lg:gap-6 flex-col justify-center lg:justify-start items-center lg:items-start mb-9 md:mb-28 mt-8 md:mt-0">
        <Typography className="text-[24px] font-sansRegular leading-[36px] tracking-[0.25px] text-basic mb-8 w-full text-center lg:text-left m-auto">
          “ The Brytix team gave me the best knowledge to create my investment strategy.”
        </Typography>
        <ReviewCart data={reviews} />
      </div>
      <DiscountCart />
    </section>
  );
};
