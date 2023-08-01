"use client";

import { Button } from "../ui/button";
import { fadeIn } from "@/constants/variants";
import { useTimer } from "@/hooks/useTimer";
import { Timer } from "@/icons/timer";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const SalesPanel = ({ className }: { className?: string }) => {
  const { formattedTime } = useTimer();
  const [isPanel, setIsPanel] = useState(false);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    const scrollBody = () => {
      console.log("scroll");

      const windowHeight = window.innerHeight;
      setInnerHeight(windowHeight);
      if (window.scrollY > 80) {
        setIsPanel(true);
        if (window.scrollY > 1900) {
          setIsPanel(false);
        }
      } else {
        setIsPanel(false);
      }
    };

    window.addEventListener("scroll", scrollBody);

    return () => window.removeEventListener("scroll", scrollBody);
  }, [isPanel, innerHeight]);

  return (
    <motion.div
      className={cn(
        `flex justify-between items-center w-full max-w-[384px] rounded-3xl gap-x-2 bg-bgBlue p-2`,
        className,
        isPanel ? "center-fixed" : ""
      )}
    >
      <p className="flex flex-col justify-center items-center bg-white w-[94px] h-[40px] rounded-3xl">
        <span className="text-[#959BF1] font-sansBold text-sm leading-[21px] tracking-[0.21px] line-through inline -mb-[7px]">$15.99</span>
        <span className="text-[#ED9F72] font-sansBold text-lg tracking-[0.27px] inline">$7.99</span>
      </p>
      <p className="flex w-[97px] h-[34px] justify-between items-center">
        <span className="block mr-1">
          <Timer />
        </span>
        <span className="text-[26px] tracking-[0.25px] text-white font-sansBold">{formattedTime}</span>
      </p>
      <div>
        <Button variant="buttonPrimaryOrange" className="uppercase bg-[#5EB25D] hover:bg-[#58A657] max-w-[127px] w-full whitespace-nowrap">
          Try Now
        </Button>
      </div>
    </motion.div>
  );
};
