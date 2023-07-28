"use client";

import React from "react";
import { Modal } from "../ui/modal";
import useReceiveEmailModal from "@/hooks/useReceiveEmailModal";
import { Title } from "../ui/title";
import Image from "next/image";
import ReceiveEmailImage from "/public/images/receive-email.png";
import { Button } from "../ui/button";
import { LinkHref } from "../ui/linkHref";
import { useRouter } from "next/navigation";

export const ReceiveEmailModal = () => {
  const viewModal = useReceiveEmailModal();
  const route = useRouter();

  const title = () => {
    return (
      <Title className=" text-lg md:text-xl tracking-[0.27px] md:tracking-[0.3px] text-center">
        Do you want to receive emails with special offers, <span className="text-colorTitle">investing know-how</span> and market digests?
      </Title>
    );
  };
  return (
    <Modal
      title={title()}
      className="max-w-[456px] h-[530px] py-12 px-4 md:px-9 !rounded-[48px] gap-0"
      isOpen={viewModal.isOpen}
      onClose={viewModal.onClose}
    >
      <div className="flex flex-col justify-between items-center">
        <div className="w-full flex justify-center items-center mb-9">
          <Image src={ReceiveEmailImage} alt="ReceiveEmailImage" className="w-[200px] h-[200px]" />
        </div>
        <div className="w-full flex justify-center items-center mb-2">
          <Button onClick={() => route.push("/selling-page")} className="w-[264px]">
            Yes, I’m in
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <LinkHref href="/checkout-results" className="uppercase text-center no-underline tracking-[1.25px] leading-[14px]">
          I know everything about investments
        </LinkHref>
      </div>
    </Modal>
  );
};
