import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import { Typography } from "../ui/typography";
import React, { useEffect, useState } from "react";

interface AlertModalProps {
  onClose: () => void;
  onConfirm: () => void;
  isOpen: boolean;
  loading?: boolean;
}
export const AlertModal: React.FC<AlertModalProps> = ({ onClose, onConfirm, isOpen, loading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const title = () => {
    return <Typography className="text-[24px] text-basic font-bold mb-4">Are you sure?</Typography>;
  };

  const description = () => {
    return <Typography className="text-[18px] font-sansMedium">Is seems you are proceeded the quiz</Typography>;
  };

  return (
    <Modal title={title()} description={description()} isOpen={isOpen} onClose={onClose}>
      <div className="pt-6 space-x-2 flex items-center justify-center w-full">
        <Button
          disabled={loading}
          variant="buttonPrimaryBlueDestructive"
          className="w-full max-w-[134px] flex justify-center items-center"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button disabled={loading} variant="buttonPrimaryBlue" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
