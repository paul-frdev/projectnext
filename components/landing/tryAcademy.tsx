"use client";

import { Title } from "../ui/title";
import { Typography } from "../ui/typography";
import { DiscountCart } from "./discountCart";
import { MoneyBack } from "./moneyBack";
import { SalesCart } from "./salesCart";
import { tryAcademyData } from "@/constants";
import { CheckCircled } from "@/icons/checkCircled";
import React from "react";

export const TryAcademy = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center mb-12">
      <div className="mb-16">
        <Title className="text-3xl tracking-[0.25px] mb-8 text-center">
          Try Brytix for
          <span className="text-colorTitle"> 7 days</span>, and you will:
        </Title>
        {tryAcademyData.map(item => (
          <SalesCart className="max-w-[248px] flex flex-col justify-center items-center m-auto gap-y-3 mb-4" key={item.id}>
            <div className="flex justify-center items-center">
              <CheckCircled />
            </div>
            <Typography className="font-sansBold text-[16px] leading-[24px] tracking-[0.1px] text-basic">{item.title}</Typography>
          </SalesCart>
        ))}
      </div>
      <DiscountCart />
      <MoneyBack />
    </section>
  );
};
