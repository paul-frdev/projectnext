'use client'

import React from 'react'
import { Modal } from '../ui/modal'
import useReceiveEmailModal from '@/hooks/useReceiveEmailModal'

export const ReceiveEmailModal = () => {
  const viewModal = useReceiveEmailModal()
  return (
    <Modal isOpen={viewModal.isOpen} onClose={viewModal.onClose}>
      <div>
        ReceiveEmailModal
      </div>
    </Modal>
  )
}
