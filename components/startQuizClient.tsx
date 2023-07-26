'use client'

import React from 'react'
import { Container } from './ui/container'
import { Subtitle } from './ui/subtitle'
import Image from 'next/image'
import startquizImage from '../public/images/startquiz.png'
import { Button } from './ui/button'
import { LinkHref } from './ui/linkHref'
import { useRouter } from 'next/navigation'
import { Typography } from './ui/typography'

export const StartQuizClient = () => {

  const route = useRouter();

  return (
    <section>
      <Container className='flex justify-center items-center h-full font-sansBold'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className=' font-body scroll-m-20 text-[32px] text-[#101010] font-bold tracking-tight transition-colors mb-2'>Investment income know-how for beginners</h1>
          <Subtitle className='mb-8'>Take the 5 min quiz to see if you can do it too</Subtitle>
          <div className='h-full w-full flex justify-center items-center mb-8'>
            <Image src={startquizImage} alt='start-quiz' className='w-full max-w-[384px] h-full max-h-[297.692px]' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <Button onClick={() => route.push('/quiz')} className='max-w-[264px] w-full h-[48px] mb-6' variant="buttonPrimaryBlue" >Take the quiz</Button>
            <Typography className='text-[rgba(16, 16, 16, 0.75)] text-sm tracking-[0.4px] leading-[18px] mb-1' >By clicking Take the quiz, you agree with</Typography>
            <div className='flex justify-center items-center gap-x-1 mb-9'>
              <LinkHref  href='/terms'>Terms, </LinkHref>
              <LinkHref  href='/privacy'>Privacy, </LinkHref>
              <LinkHref  href='/subscription-terms'>Subscription Terms</LinkHref>
            </div>
          </div>
          <Typography>
            Capital, as an investment learning platform, does not provide any investment or financial advice. You should acknowledge there is a risk of capital loss and income is not guaranteed and will depend on various factors. Your decision to make an investment should be made at your own discretion and upon their own will only. After a weekly trial of ten dollars, a monthly subscription will be applied in the amount of twenty-nine dollars and ninety-nine cents unless you decide to unsubscribe.
          </Typography>
        </div>
      </Container>
    </section>
  )
}
