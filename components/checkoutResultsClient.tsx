'use client'
import { checkoutResults } from '@/constants'
import { SmallCheck } from '@/icons/smallCheck'
import React, { useEffect, useState } from 'react'
import { CircularProgressBar } from './ui/CircularProgressBar'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { CircularProgress } from '@chakra-ui/react'

export const CheckoutResultsClient = () => {


  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 90); 


    if (progress >= 100) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [progress]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 2,
      },
    },
  };

  const itemLi = {
    hidden: { opacity: 0.5 },
    show: { opacity: 1.1 },
  };


  return (
    <section className='flex flex-col justify-center items-center gap-y-9'>
      <div className='flex flex-col justify-center items-center gap-y-9 w-full max-w-[328px] bg-white py-8 px-6 rounded-3xl'>
        <div>
          {progress <= 100 && <CircularProgressBar value={progress} />}
        </div>
        <div className='w-full'>
          {/* List */}
          <motion.ul variants={container} initial="hidden" animate="show" className='flex flex-col w-full max-w-[280px] justify-between items-center gap-y-3'>
            {checkoutResults.map((result) => (
              <motion.li variants={itemLi} key={result.id} className={cn(` text-checkColor text-[14px] font-sansRegular tracking-[0.4px] leading-[18px] flex justify-start items-center w-full gap-x-3`)}>
                <div className='flex justify-center items-center relative'>
                  <motion.span
                    variants={container}
                    animate={{ transitionEnd: { display: "block", zIndex: 2 } }}
                    className='w-[12px] h-[12px]'>
                    <SmallCheck />
                  </motion.span>
                  <CircularProgress
                    className="!absolute top-[0] z-1 left-0 w-[12px] h-[12px]"
                    size={12}
                    isIndeterminate
                    color='#727AED'
                  />
                </div>
                {result.title}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}