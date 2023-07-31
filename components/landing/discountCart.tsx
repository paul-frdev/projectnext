"use client";

import { Button } from "../ui/button";
import { LinkHref } from "../ui/linkHref";
import { Title } from "../ui/title";
import { Typography } from "../ui/typography";
import { SalesCart } from "./salesCart";
import { SalesWidget } from "./salesWidget";
import guarenteeImage from "/public/images/guarentee.png";
import { useTimer } from "@/hooks/useTimer";
import { LockOrange } from "@/icons/lockOrange";
import Image from "next/image";
import React from "react";

export const DiscountCart = () => {
  const { formattedTime } = useTimer();
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <SalesCart className="border-8 border-[#727AED] w-full max-w-[328px] md:max-w-[1200px] flex flex-col md:flex-row justify-center gap-y-6 relative mb-9">
        <span className="absolute -top-[68px] md:top-[13px] -right-[8px] md:right-[65px] bg-rightCoins md:bg-leftCoins w-[132px] h-[178px] bg-no-repeat object-center overflow-hidden object-cover" />
        <div className='flex flex-col md:flex-row justify-start md:justify-center items-start gap-y-6 w-full max-w-[264px] md:max-w-[570px]'>
          <div className="w-full max-w-[280px] m-auto">
            <Title className="text-xl text-left tracking-[0.3px] mb-4">
              7-day trial for <span className="text-orange">50%</span>
            </Title>
            <SalesWidget className="bg-transparent bg-bgBlue flex flex-col justify-center items-center font-sansBold tracking-[0.25px] h-[95px]">
              <span className="text-[#B8BCF6] inline text-[28px] line-through -mb-[15px]">$15.99</span>
              <span className="text-[42px] text-white">$7.98</span>
            </SalesWidget>
          </div>
          <div className='w-full'>
            <Title className="text-xl text-left tracking-[0.3px] mb-4">Discount expires in</Title>
            <SalesWidget className="bg-transparent max-w-[280px] border-8 border-lightOrange  gap-y-3 flex justify-center items-center  h-[95px]">
              <span className="w-[65px]">
                <LockOrange />
              </span>
              <span className="text-[56px] tracking-[0.25px] font-sansBold block text-orange">{formattedTime}</span>
            </SalesWidget>
          </div>
        </div>
        <span className="absolute -bottom-[42px] md:bottom-0 -left-[5px] md:left-[59px] bg-leftCoins md:bg-rightCoins w-[100px] md:w-[145px] h-[169px] md:h-[191px]  bg-no-repeat object-center overflow-hidden object-cover" />
      </SalesCart>
      <div className="w-full flex justify-center mb-6 md:mb-9">
        <Button
          variant="buttonPrimaryBlueDestructive"
          className="bg-bgGreen hover:bg-hoverGreen border-none max-w-[328px] md:max-w-[264px] w-full flex justify-center items-center h-[48px] text-white uppercase shadow shadow-[rgba(94, 178, 93, 0.50)]"
        >
          TRY NOW
        </Button>
      </div>
      <div className="w-full max-w-[328px] mb-3">
        <Image src={guarenteeImage} alt="guarentee" />
      </div>
      <div className="flex justify-center items-center">
        <Typography className="w-full max-w-[792px] text-[14px] font-sansRegular leading-[18px] tracking-[0.4px] text-darkGray">
          By continuing you agree that if you don’t cancel at least 24 hours prior to the end of the 7-days trial period, you will automatically be
          charged the full price of every 30 days until you cancel in settings. Learn more about cancellation and refund policy in{" "}
          <LinkHref className=" font-sansRegular leading-[18px] tracking-[0.4px] text-grayLinks" href="/terms">
            Subscription Terms.
          </LinkHref>
        </Typography>
      </div>
    </div>
  );
};
