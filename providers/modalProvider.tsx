'use client';

import { ReceiveEmailModal } from '@/components/modals/receiveEmailModal';
import React, { useEffect, useState } from 'react';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ReceiveEmailModal />
    </>
  );
};

export default ModalProvider;