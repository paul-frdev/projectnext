'use client'

import { Timer } from '@/icons/timer'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { fadeIn } from '@/constants/variants'
import { useTimer } from '@/hooks/useTimer'



export const SalesPanel = () => {
  const { formattedTime } = useTimer()
  return (
    <motion.div
      variants={fadeIn}
      className='flex justify-between items-center w-full max-w-[384px] rounded-3xl bg-bgBlue p-2'
    >
      <motion.p variants={fadeIn} className='flex flex-col justify-center items-center bg-white w-[94px] h-[40px] rounded-3xl'>
        <span className='text-[#959BF1] font-sansBold text-sm leading-[21px] tracking-[0.21px] line-through inline -mb-[7px]'>$15.99</span>
        <span className='text-[#ED9F72] font-sansBold text-lg tracking-[0.27px] inline'>$7.99</span>
      </motion.p>
      <motion.p variants={fadeIn} className='flex w-[97px] h-[34px] justify-between items-center'>
        <span className='block mr-1'><Timer /></span>
        <span className='text-[26px] tracking-[0.25px] text-white font-sansBold'>{formattedTime}</span>
      </motion.p>
      <motion.div variants={fadeIn}>
        <Button variant='buttonPrimaryOrange' className='uppercase bg-[#5EB25D] hover:bg-[#58A657] max-w-[127px] w-full'>Try Now</Button>
      </motion.div>
    </motion.div>
  )
}
