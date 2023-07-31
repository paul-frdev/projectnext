"use client";

import { Title } from "../ui/title";
import { SalesCart } from "./salesCart";
import React from "react";

export const GetAcademy = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-16 md:mb-28">
      <Title className="text-[30px] md:text-[36px] tracking-[0.25px] mb-8 md:mb-14">What you get Academy</Title>
      <div className='flex flex-col justify-center lg:justify-between items-center lg:items-start lg:grid lg:grid-cols-2 lg:gap-x-6 w-full'>
        <SalesCart className=" bg-bgBlue max-w-[328px] md:max-w-[588px] md:max-h-[454px] md:h-full md:row-start-1 md:row-end-3 w-full flex flex-col justify-center items-center gap-y-6 relative mb-24 lg:mb-0 lg:my-auto md:rounded-[48px] md:justify-start md:items-start">
          <div className="flex flex-col justify-center items-center md:items-start relative">
            <Title className="text-[26px] md:text-[32px] md:mb-6 md:text-left tracking-[0.5px] text-white">Investment income<br /> know-how</Title>
            <span className="absolute -top-[13px] left-0 text-[212.178px] lg:text-[369.347px] font-sansBold tracking-[1.473px] leading-none text-extraLight">1</span>
            <div className="flex flex-col justify-center items-center gap-y-4 w-full">
              <p className="w-full text-left text-[16px] text-lightGray tracking-[0.25px] leading-[24px] font-sansRegular">
                Gain profit from trades with stocks
              </p>
              <p className=" md:w-full text-left text-[16px] text-lightGray tracking-[0.25px] leading-[24px] font-sansRegular">
                and cryptocurrencies in our investment simulator
              </p>
            </div>
          </div>
          <span className="absolute bottom-[-82px] md:-bottom-[53px] lg:-bottom-[124px] right-0 bg-dollarsSvg lg:bg-dollars max-w-[220px] h-full max-h-[109px] w-full lg:max-w-[458px] lg:h-full lg:max-h-[288px] object-cover object-center bg-no-repeat" />
        </SalesCart>
        <SalesCart className=" bg-bgOrange max-w-[328px] md:max-w-[588px] w-full flex flex-col justify-center items-center gap-y-6 relative mb-6 md:rounded-[48px] md:px-10 md:py-14">
          <div className="flex flex-col justify-center items-center md:items-start relative">
            <Title className="text-[26px]  md:text-[30px] md:mb-6 md:text-left tracking-[0.5px] text-white mb-6">Major investment principles</Title>
            <span className="absolute -top-[13px] right-0 text-[212.178px] font-sansBold tracking-[1.473px] leading-none text-extraLight">2</span>
            <div className="flex flex-col justify-center items-center gap-y-4 w-full">
              <p className="w-full text-left text-[16px] text-lightGray tracking-[0.25px] leading-[24px] font-sansRegular">
                Pick up well-known investment principles of the richest and most successful investors
              </p>
            </div>
          </div>
        </SalesCart>
        <SalesCart className=" bg-bgGreen max-w-[328px] md:max-w-[588px] w-full flex md:row-start-2 md:col-start-2 flex-col justify-center items-center gap-y-6 relative md:rounded-[48px] md:px-10 md:py-14">
          <div className="flex flex-col justify-center items-center md:items-start relative">
            <Title className="text-[26px]  md:text-[30px] md:mb-6 md:text-left tracking-[0.5px] text-white mb-6">Chat with your coach</Title>
            <span className="absolute -top-[31px] right-0 text-[212.178px] font-sansBold tracking-[1.473px] leading-none text-extraLight">3</span>
            <div className="flex flex-col justify-center items-center gap-y-4 w-full">
              <p className="w-full text-left text-[16px] text-lightGray tracking-[0.25px] leading-[24px] font-sansRegular">
                Get all answers and reduce mistakes using 24/7 chat with your personal coach
              </p>
            </div>
          </div>
        </SalesCart>
      </div>
    </section>
  );
};
