import { ReceiveEmailForm } from '@/components/forms/receiveEmailForm'
import ModalProvider from '@/providers/modalProvider'
import React from 'react'

const EnterEmailPage = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-y-9'>
      <ModalProvider />
      <ReceiveEmailForm />
    </section>
  )
}

export default EnterEmailPage