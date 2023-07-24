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
    <div>
      <Container className='flex justify-between items-center mb-[56px]'>
        <div>
          <Link href='/' className="text-6xl font-logo font-bold">
            BG <span className="text-primary">Capital</span>
          </Link>
        </div>
        <div className='flex justify-between items-center gap-x-6'>
          <Button variant='buttonPrimaryBlue' >
            <Person />
            Log in
          </Button>
          <Button variant='buttonPrimaryBlueDestructive' >
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
