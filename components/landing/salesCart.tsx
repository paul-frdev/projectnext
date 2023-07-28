'use client'

import { cn } from '@/lib/utils'
import React, { Children } from 'react'

interface SalesCartProps {
  className?: string;
  children: React.ReactNode
}

export const SalesCart: React.FC<SalesCartProps> = ({ className, children }) => {
  return (
    <div className={cn(`w-full max-w-[1200] h-auto bg-white px-6 py-8 rounded-3xl`, className)}>
      {children}
    </div>
  )
}
