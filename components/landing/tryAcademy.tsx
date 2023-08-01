"use client";

import { motion } from 'framer-motion';
import { Title } from "../ui/title";
import { Typography } from "../ui/typography";
import { DiscountCart } from "./discountCart";
import { MoneyBack } from "./moneyBack";
import { SalesCart } from "./salesCart";
import { tryAcademyData } from "@/constants";
import { CheckCircled } from "@/icons/checkCircled";
import React from "react";
import { fadeIn, staggerContainer } from '@/constants/variants';

export const TryAcademy = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView={'animate'}
      viewport={{ once: false, amount: 0.2 }}
      className="w-full flex flex-col justify-center items-center mb-12 md:mb-28"
    >
      <div className="mb-16 md:mb-28">
        <Title variants={fadeIn} className="text-3xl md:text-4xl tracking-[0.25px] mb-8 md:mb-12 text-center">
          Try Academy for
          <motion.span variants={fadeIn} className="text-colorTitle"> 7 days</motion.span>, and you will:
        </Title>
        <div className='flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-x-4'>
          {tryAcademyData.map(item => (
            <SalesCart variants={fadeIn} className="max-w-[248px] flex flex-col justify-center items-center m-auto gap-y-3" key={item.id}>
              <div className="flex justify-center items-center">
                <CheckCircled />
              </div>
              <Typography className="font-sansBold text-[16px] leading-[24px] tracking-[0.1px] text-basic">{item.title}</Typography>
            </SalesCart>
          ))}
        </div>
      </div>
      <DiscountCart />
      <MoneyBack />
    </motion.section>
  );
};
