"use client";

import { Title } from "../ui/title";
import { SalesCart } from "./salesCart";
import React from "react";

export const GetAcademy = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-16">
      <Title className="text-[30px] tracking-[0.25px] mb-8">What you get Academy</Title>
      <SalesCart className=" bg-bgBlue max-w-[328px] w-full flex flex-col justify-center items-center gap-y-6 relative mb-24">
        <div className="flex flex-col justify-center items-center relative">
          <Title className="text-[26px] tracking-[0.5px] text-white">Investment income know-how</Title>
          <span className="absolute -top-[13px] left-0 text-[212.178px] font-sansBold tracking-[1.473px] leading-none text-extraLight">1</span>
          <div className="flex flex-col justify-center items-center gap-y-4 w-full">
            <p className="w-full text-left text-[16px] text-lightGray tracking-[0.25px] leading-[24px] font-sansRegular">
              Gain profit from trades with stocks
            </p>
            <p className=" text-left text-[16px] text-lightGray tracking-[0.25px] leading-[24px] font-sansRegular">
              and cryptocurrencies in our investment simulator
            </p>
          </div>
        </div>
        <span className="absolute bottom-[-82px] right-0 bg-dollars w-[220px] h-[109px] object-cover object-center bg-no-repeat" />
      </SalesCart>
      <SalesCart className=" bg-bgOrange max-w-[328px] w-full flex flex-col justify-center items-center gap-y-6 relative mb-6">
        <div className="flex flex-col justify-center items-center relative">
          <Title className="text-[26px] tracking-[0.5px] text-white mb-6">Major investment principles</Title>
          <span className="absolute -top-[13px] right-0 text-[212.178px] font-sansBold tracking-[1.473px] leading-none text-extraLight">2</span>
          <div className="flex flex-col justify-center items-center gap-y-4 w-full">
            <p className="w-full text-left text-[16px] text-lightGray tracking-[0.25px] leading-[24px] font-sansRegular">
              Pick up well-known investment principles of the richest and most successful investors
            </p>
          </div>
        </div>
      </SalesCart>
      <SalesCart className=" bg-bgGreen max-w-[328px] w-full flex flex-col justify-center items-center gap-y-6 relative">
        <div className="flex flex-col justify-center items-center relative">
          <Title className="text-[26px] tracking-[0.5px] text-white mb-6">Chat with your coach</Title>
          <span className="absolute -top-[31px] right-0 text-[212.178px] font-sansBold tracking-[1.473px] leading-none text-extraLight">3</span>
          <div className="flex flex-col justify-center items-center gap-y-4 w-full">
            <p className="w-full text-left text-[16px] text-lightGray tracking-[0.25px] leading-[24px] font-sansRegular">
              Get all answers and reduce mistakes using 24/7 chat with your personal coach
            </p>
          </div>
        </div>
      </SalesCart>
    </section>
  );
};
