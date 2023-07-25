import { cn } from '@/lib/utils'
import React from 'react'

interface TitleProps {
  children: string;
}
export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h2 className={cn(`scroll-m-20 text-[32px] text-[#101010] font-bold tracking-tight transition-colors first:mt-0`)}>
      {children}
    </h2>
  )
}
