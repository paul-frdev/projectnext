import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quiz',
  description: 'start your investing journey',
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-body'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
