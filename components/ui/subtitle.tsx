import { cn } from '@/lib/utils'
import React from 'react'

export const Subtitle = ({ children, className }: { children: string, className?: string }) => {
  return (
    <p className={cn(`text-[#727AED] text-[16px] font-sansBold tracking-[0.1px] font-bold leading-[24px]`, className)}>
      {children}
    </p>
  )
}
