"use client";

import { LinkHref } from "../ui/linkHref";
import { Title } from "../ui/title";
import { Typography } from "../ui/typography";
import { SalesCart } from "./salesCart";
import backMoneyImage from "/public/images/back-money.png";
import Image from "next/image";
import React from "react";

export const MoneyBack = () => {
  return (
    <div className="mt-16">
      <div className="flex w-full justify-center items-center mb-4">
        <Image src={backMoneyImage} alt="money-back" />
      </div>
      <SalesCart className="w-full max-w-[328px] bg-green flex flex-col justify-center items-center gap-y-4">
        <Title className="text-[26px] text-white tracking-[0.5px] leading-normal">Money-Back Guarantee</Title>
        <Typography className="text-left text-lightGray font-sansRegular text-[16px] leading-[24px] tracking-[0.25px]">
          We are so confident in our service that we are ready to offer a full refund within 30 days of purchase if you do not achieve initial results
          and can demonstrate you have followed the plan.
        </Typography>
        <Typography className="text-left text-lightGray font-sansRegular text-[16px] leading-[24px] tracking-[0.25px]">
          Learn more about all the conditions in our{" "}
          <LinkHref className="font-sansRegular text-[16px] leading-[24px] tracking-[0.25px] text-white" href="/terms">
            Subscription Terms
          </LinkHref>
          .
        </Typography>
      </SalesCart>
    </div>
  );
};
