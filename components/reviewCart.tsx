"use client";

import { SalesCart } from "./landing/salesCart";
import { StarRating } from "./starRating";
import { Typography } from "./ui/typography";
import { Review } from "@/types";
import Image from "next/image";
import React from "react";

interface ReviewCartProps {
  data: Review[];
}

export const ReviewCart: React.FC<ReviewCartProps> = ({ data }) => {
  return (
    <>
      {data.map((item: Review) => (
        <SalesCart key={item.id} className="w-full max-w-[328px] md:max-w-[588px] lg:h-full lg:max-h-[336px] shadow-light">
          <div className="flex flex-col justify-start items-start gap-y-4">
            <div className="flex justify-start items-center gap-x-4">
              <Image src={item.src} alt="acatar" width={64} height={64} />
              <div>
                <Typography className="text-basic text-[16px] tracking-[0.1px] leading-[24px] font-sansBold">{item.name}</Typography>
                <StarRating totalStars={item.rating} />
              </div>
            </div>
            <div>
              <Typography className="text-grayLinks font-sansRegular text-[16px] leading-[24px] tracking-[0.25px] text-left">{item.text}</Typography>
            </div>
          </div>
        </SalesCart>
      ))}
    </>
  );
};
