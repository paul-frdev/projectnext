"use client";

import { AnimatedProgressBar } from "../ui/AnimatedProgressBar";
import { Title } from "../ui/title";
import { Typography } from "../ui/typography";
import { SalesCart } from "./salesCart";
import { SalesWidget } from "./salesWidget";
import computerImage from "/public/images/computer.png";
import {
  RightImageAnim,
  countVariants,
  fadeIn,
  fadeInCart,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerBlockContainer,
  staggerContainer,
  staggerTextContainer,
} from "@/constants/variants";
import { Bank } from "@/icons/bank";
import { Dollar } from "@/icons/dollar";
import { Growth } from "@/icons/growth";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const ProfileResults = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue(prevValue => Math.min(prevValue + 1, 83));
    }, 95);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden  mb-16">
      <motion.div variants={staggerContainer} initial="initial" whileInView={"animate"} viewport={{ once: false, amount: 0.2 }}>
        <Title variants={fadeIn} className="text-3xl md:text-4xl md:text-left tracking-[0.25px] text-basic text-center mb-6">
          Your profile summary:
        </Title>
        <div className="md:flex md:flex-wrap lg:flex-nowrap md:justify-between md:items-center md:w-full md:max-w-[800px] lg:max-w-[1200px] lg:gap-x-2 md:mb-8 m-auto">
          <SalesCart
            variants={fadeIn}
            className="max-w-[384px] md:max-w-[364px] min-[810px]:max-w-[384px] bg-bgBlue flex flex-col items-start gap-y-4 m-auto mb-4"
          >
            <div className="flex justify-between items-center w-full">
              <Title variants={fadeIn} className="text-white text-3xl md:text-4xl tracking-[0.25px]">
                Income
              </Title>
              <SalesWidget
                variants={fadeIn}
                className="max-w-[73px] h-[40px] px-3 py-2 text-[16px] font-sansBold leading-[24px] tracking-[0.1px] text-[#727AED]"
              >
                Ready
              </SalesWidget>
            </div>
            <motion.div variants={fadeIn}>
              <motion.p
                variants={countVariants}
                transition={{ duration: 0.5 }}
                className="text-[56px] font-sansBold text-lightGray tracking-[0.503px]"
              >
                <span className="w-[34px] inline-block">6</span>/10
              </motion.p>
            </motion.div>
            <div>
              <motion.p variants={fadeIn} className="text-[16px] font-sansBold leading-[24px] tracking-[0.1px] text-white">
                You have enough to start. We will teach you how to make more.
              </motion.p>
            </div>
          </SalesCart>
          <SalesCart
            variants={fadeIn}
            className="max-w-[384px] md:max-w-[364px] min-[810px]:max-w-[384px] bg-bgGreen flex flex-col items-start gap-y-4 m-auto mb-4"
          >
            <div className="flex justify-between items-center w-full">
              <Title variants={fadeIn} className="text-white text-3xl md:text-4xl tracking-[0.25px]">
                Mindset
              </Title>
              <SalesWidget
                variants={fadeIn}
                className="max-w-[73px] h-[40px] px-3 py-2 text-[16px] font-sansBold leading-[24px] tracking-[0.1px] text-green"
              >
                Great
              </SalesWidget>
            </div>
            <motion.div variants={fadeIn}>
              <p className="text-[56px] font-sansBold text-lightGray tracking-[0.503px]">
                <span className="w-[34px] inline-block">9</span>/10
              </p>
            </motion.div>
            <div>
              <motion.p variants={fadeIn} className="text-[16px] font-sansBold leading-[24px] tracking-[0.1px] text-white">
                You are ready, you’ve got the distinct mindset to achieve success.
              </motion.p>
            </div>
          </SalesCart>
          <SalesCart
            variants={fadeIn}
            className="max-w-[384px] md:max-w-[800px] lg:max-w-[384px] bg-gray flex flex-col items-start gap-y-4 m-auto mb-4"
          >
            <div className="flex justify-between items-center w-full">
              <Title variants={fadeIn} className="text-white text-3xl md:text-4xl tracking-[0.25px]">
                Knowledge
              </Title>
              <SalesWidget
                variants={fadeIn}
                className="max-w-[89px] h-[40px] px-3 py-2 text-[16px] font-sansBold leading-[24px] tracking-[0.1px] text-basic"
              >
                Improve
              </SalesWidget>
            </div>
            <motion.div variants={fadeIn}>
              <p className="text-[56px] font-sansBold text-lightGray tracking-[0.503px]">
                <span className="w-[34px] inline-block">5</span>/10
              </p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <p className="text-[16px] font-sansBold leading-[24px] tracking-[0.1px] text-white">
                You need to know a few simple things, and you are ready.
              </p>
            </motion.div>
          </SalesCart>
        </div>
        <motion.div
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerTextContainer}
          className="full"
        >
          <SalesCart
            variants={{
              initial: {
                y: 0,
                opacity: 0,
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: { type: "tween", duration: 1, delay: 1 },
              },
            }}
            className="max-w-[384px] md:max-w-[800px] lg:max-w-[1200px] flex flex-col md:gap-y-4 items-start m-auto mb-4 border-8 border-[#727AED] mb-9 md:mb-28"
          >
            <div className="flex flex-wrap md:flex-nowrap justify-start items-start md:items-center w-full gap-y-4 md:gap-x-4">
              <Title variants={fadeIn} className="text-basic text-3xl md:text-4xl md:whitespace-nowrap tracking-[0.25px] md:mb-0">
                Your readiness:
              </Title>
              <div className="mb-6 md:mb-0 w-full flex justify-start md:justify-center items-start md:items-center flex-wrap md:flex-nowrap md:gap-x-4">
                <Typography className="text-colorTitle text-left text-3xl md:w-full md:max-w-[60px] font-sansBold tracking-[0.25px] mb-3 md:mb-0">
                  {progressValue.toString()}%
                </Typography>
                <AnimatedProgressBar percent={progressValue} />
              </div>
            </div>
            <div>
              <motion.p variants={fadeIn} className="text-lg md:text-[20px] font-sansBold leading-[24px] tracking-[0.27px] leading-[24px] text-basic">
                <motion.span variants={fadeIn} className="text-[#ED9F72]">
                  7-day
                </motion.span>{" "}
                program is enough for you to start your investment journey
              </motion.p>
            </div>
          </SalesCart>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerTextContainer}
          className="w-full"
        >
          <SalesCart
            variants={fadeInUp}
            className="max-w-[384px] md:max-w-[1200px] flex flex-col md:flex-row items-start md:items-center m-auto gap-y-6 md:gap-x-6  bg-bgOrange"
          >
            <div className="w-full">
              <div className="flex justify-between md:justify-start items-center w-full mb-6">
                <Title variants={fadeIn} className="text-white text-3xl md:text-4xl tracking-[0.25px]">
                  Investing is easier
                  <br /> than you think
                </Title>
              </div>
              <div className="w-full flex justify-start items-start flex-col">
                <SalesCart variants={fadeInCart} className="flex flex-col md:pl-12 justify-center md:justify-start items-start gap-y-4 md:mr-auto md:max-w-[407px]">
                  <motion.div variants={staggerBlockContainer} className="flex w-[80%] justify-start gap-x-3 items-center">
                    <motion.span variants={fadeInRight} className="w-[24px] h-auto">
                      <Dollar />
                    </motion.span>
                    <motion.p variants={fadeInLeft} className="text-[16px] text-basic font-sansBold tracking-[0.1px] leading-[24px]">
                      You can start with $10
                    </motion.p>
                  </motion.div>
                  <motion.div variants={staggerBlockContainer} className="flex w-full justify-start gap-x-3 items-center">
                    <motion.span variants={fadeInRight} className="w-[24px] h-auto">
                      <Bank />
                    </motion.span>
                    <motion.p variants={fadeInLeft} className="text-[16px] text-basic font-sansBold tracking-[0.1px] leading-[24px]">
                      No need
                      <br /> for a Finance degree
                    </motion.p>
                  </motion.div>
                  <motion.div variants={staggerBlockContainer} className="flex w-full justify-start gap-x-3 items-center">
                    <motion.span variants={fadeInRight} className="w-[24px] h-auto">
                      <Growth />
                    </motion.span>
                    <motion.p variants={fadeInLeft} className="text-[16px] text-basic font-sansBold tracking-[0.1px] leading-[24px]">
                      No need
                      <br /> to be a market expert
                    </motion.p>
                  </motion.div>
                </SalesCart>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="animate"
              viewport={{ once: false }}
              variants={RightImageAnim}
              className="w-full flex justify-center items-center"
            >
              <Image src={computerImage} alt="computer" className="w-full max-w-[597px] h-auto md:object-cover md:bg-center" />
            </motion.div>
          </SalesCart>
        </motion.div>
      </motion.div>
    </section>
  );
};
