'use client'

import React, { useEffect, useState } from 'react'
import { SalesCart } from './salesCart'

import { SalesWidget } from './salesWidget'
import { Title } from '../ui/title'
import { Typography } from '../ui/typography'
import { AnimatedProgressBar } from '../ui/AnimatedProgressBar'
import Image from 'next/image'
import computerImage from '/public/images/computer.png'
import { Dollar } from '@/icons/dollar'
import { Bank } from '@/icons/bank'
import { Growth } from '@/icons/growth'

export const ProfileResults = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prevValue) => Math.min(prevValue + 1, 83));
    }, 95); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='w-full'>
      <div>
        <Title className='text-3xl tracking-[0.25px] text-basic text-center mb-6'>Your profile summary:</Title>
        <SalesCart className='max-w-[384px] bg-bgBlue flex flex-col items-start gap-y-4 m-auto mb-4'>
          <div className='flex justify-between items-center w-full'>
            <Title className='text-white text-3xl tracking-[0.25px]'>Income</Title>
            <SalesWidget className='max-w-[73px] h-[40px] px-3 py-2 text-[16px] font-sansBold leading-[24px] tracking-[0.1px] text-[#727AED]'>Ready</SalesWidget>
          </div>
          <div>
            <p className='text-[56px] font-sansBold text-lightGray tracking-[0.503px]'>6/10</p>
          </div>
          <div>
            <p className='text-[16px] font-sansBold leading-[24px] tracking-[0.1px] text-white'>You have enough to start. We will teach you how to make more.</p>
          </div>
        </SalesCart>
        <SalesCart className='max-w-[384px] bg-bgGreen flex flex-col items-start gap-y-4 m-auto mb-4'>
          <div className='flex justify-between items-center w-full'>
            <Title className='text-white text-3xl tracking-[0.25px]'>Mindset</Title>
            <SalesWidget className='max-w-[73px] h-[40px] px-3 py-2 text-[16px] font-sansBold leading-[24px] tracking-[0.1px] text-green'>Great</SalesWidget>
          </div>
          <div>
            <p className='text-[56px] font-sansBold text-lightGray tracking-[0.503px]'>9/10</p>
          </div>
          <div>
            <p className='text-[16px] font-sansBold leading-[24px] tracking-[0.1px] text-white'>You are ready, you’ve got the distinct mindset to achieve success.</p>
          </div>
        </SalesCart>
        <SalesCart className='max-w-[384px] bg-gray flex flex-col items-start gap-y-4 m-auto mb-4'>
          <div className='flex justify-between items-center w-full'>
            <Title className='text-white text-3xl tracking-[0.25px]'>Knowledge</Title>
            <SalesWidget className='max-w-[89px] h-[40px] px-3 py-2 text-[16px] font-sansBold leading-[24px] tracking-[0.1px] text-basic'>Improve</SalesWidget>
          </div>
          <div>
            <p className='text-[56px] font-sansBold text-lightGray tracking-[0.503px]'>5/10</p>
          </div>
          <div>
            <p className='text-[16px] font-sansBold leading-[24px] tracking-[0.1px] text-white'>You need to know a few simple things, and you are ready.</p>
          </div>
        </SalesCart>
        <SalesCart className='max-w-[384px] flex flex-col items-start m-auto mb-4 border-8 border-[#727AED] mb-9'>
          <div className='flex justify-between items-center w-full mb-4'>
            <Title className='text-basic text-3xl tracking-[0.25px]'>Your readiness:</Title>
          </div>
          <div className='mb-6 w-full flex justify-start items-start flex-col'>
            <Typography className='text-colorTitle text-left text-3xl font-sansBold tracking-[0.25px] mb-3'>{progressValue.toString()}%</Typography>
            <AnimatedProgressBar percent={progressValue} />
          </div>
          <div>
            <p className='text-lg font-sansBold leading-[24px] tracking-[0.27px] leading-[24px] text-basic'>
              <span className='text-[#ED9F72]'>7-day</span> program is enough for you to start your investment journey
            </p>
          </div>
        </SalesCart>
        <SalesCart className='max-w-[384px] flex flex-col items-start m-auto gap-y-6  bg-bgOrange'>
          <div className='flex justify-between items-center w-full mb-4'>
            <Title className='text-white text-3xl tracking-[0.25px]'>Investing is easier than you think</Title>
          </div>
          <div className='w-full flex justify-start items-start flex-col'>
            <SalesCart className='flex flex-col justify-start items-start gap-y-4'>
              <div className='flex w-[80%] justify-start gap-x-3 items-center'>
                <span className='w-[24px] h-auto'>
                  <Dollar />
                </span>
                <p className='text-[16px] text-basic font-sansBold tracking-[0.1px] leading-[24px]'>You can start with $10</p>
              </div>
              <div className='flex w-full justify-start gap-x-3 items-center'>
                <span className='w-[24px] h-auto'>
                  <Bank />
                </span>
                <p className='text-[16px] text-basic font-sansBold tracking-[0.1px] leading-[24px]'>No need<br /> for a Finance degree</p>
              </div>
              <div className='flex w-full justify-start gap-x-3 items-center'>
                <span className='w-[24px] h-auto'>
                  <Growth />
                </span>
                <p className='text-[16px] text-basic font-sansBold tracking-[0.1px] leading-[24px]'>No need<br/> to be a market expert</p>
              </div>
            </SalesCart>
          </div>
          <div className='w-full flex justify-center items-center'>
            <Image src={computerImage} alt='computer' className='w-full max-w-[597px] h-auto' />
          </div>
        </SalesCart>
      </div>
    </section>
  )
}
