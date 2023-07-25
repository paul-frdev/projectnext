'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Typography } from './ui/typography';
import { Progress } from './ui/progress';
import { ArrowBackward } from '@/icons/arrowBackward';

interface QuizNavProps {
  index: number;
  countPoints?: number;
  secondPoints?: number;
  disabled?: boolean;
  prevQuestion?: () => void;
}
export const QuizNav: React.FC<QuizNavProps> = ({ index, countPoints, secondPoints, disabled, prevQuestion }) => {

  return (
    <div className='grid grid-cols-4 w-full max-w-[792px] px-2'>
      <div className='row-start-1 row-end-2'>
        <Button onClick={prevQuestion} disabled={disabled} className='max-w-[78px] h-[42px] text-darkGray p-1 text-sm uppercase flex justify-between gap-x-2 items-start border-none hover:bg-transparent hover:text-darkGray rounded-md' variant='buttonPrimaryBlueDestructive' >
          <ArrowBackward />
          Back
        </Button>
      </div>
      <div className=' flex gap-x-4 w-full max-w-[792px] col-start-2 col-end-4'>
        <div className='flex gap-y-[6px] w-full flex-col justify-start items-start'>
          <Typography className='text-[#101010] text-[16px] leading-[24px] tracking-[0.1px] font-sansBold text-left'>About you</Typography>
          <Progress className='bg-progress w-[140px]' value={countPoints} />
        </div>
        <div className='flex flex-col justify-start items-center gap-y-[6px]'>
          <Typography className='text-[#101010] text-[16px] leading-[24px] tracking-[0.1px] font-sansBold text-left'>Personalization</Typography>
          <Progress className='bg-progress w-[230px]' value={secondPoints} />
        </div>
      </div>
      <p className='col-start-4 col-end-4 text-right text-count font-sansBold'>
        {index + 1}/20
      </p>
    </div>
  )
}
