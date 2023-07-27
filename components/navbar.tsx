'use client'

import React from 'react'
import { Container } from './ui/container'
import Link from 'next/link'
import { Button } from './ui/button'
import { Person } from '@/icons/person'
import { QuestionMark } from '@/icons/questionMark'
import { Menu } from '@/icons/menu'

export const Navbar = () => {
  return (
    <div className='font-body'>
      <Container className='flex justify-between items-center mb-[56px] py-2'>
        <div>
          <Link href='/' className="text-4xl font-logo font-sansBold">
            Academy
          </Link>
        </div>
        <div className='flex justify-between items-center gap-x-6'>
          <Button variant='buttonPrimaryBlue' className='hidden md:flex font-sansBold' >
            <Person />
            Log in
          </Button>
          <Button variant='buttonPrimaryBlueDestructive' className='flex rounded-full h-[45px] shadow-buttonShadow w-[45px] p-0 justify-center items-center hover:bg-transparent'>
            <QuestionMark />
          </Button>
          <Button variant='buttonPrimaryOrangeDestructive' >
            <Menu />
          </Button>
        </div>
      </Container>
    </div>
  )
}
