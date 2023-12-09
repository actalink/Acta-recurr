import Image from "next/image";
import InnerComponent from "../assets/inner-component.svg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiGift } from "react-icons/hi";
import { TbCoin } from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";
import Connectbutton from "./Connectbutton";
import Metamask from "../assets/metamask.png";

const ConnectModal = (props: { isConnected: boolean, smartWallet: string }) => {
  return (
    <>
      <div
        className={`flex flex-col py-9 px-10 justify-start items-center lg:w-1/3 xl:w-96 sm:w-1/2 h-auto bg-violet-50 rounded-3xl text-center gap-4 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 z-50 transition ease-in-out ${
          props.isConnected ? "-top-1/2 duration-1000" : "top-1/2 duration-1000"
        }`}
      >
        <span className="text-xl font-semibold">Connect to Actalink</span>
        <span className="text-acta-grey text-sm font-medium">
          Connect your Metamask wallet to create Acta smart account
        </span>
        <div className="flex justify-center items-center w-auto h-auto gap-4">
          <div className="flex justify-center items-center border-2 border-solid rounded-full border-acta-light-grey p-4 h-20 w-20 bg-white">
            <Image
              src={InnerComponent}
              alt="Innercomponent"
              className="h-16 w-16"
            />
          </div>
          <div className="text-acta-grey">
            <BiDotsHorizontalRounded className="h-8 w-8" />
          </div>
          <div className="flex justify-center items-center border-2 border-solid rounded-full border-acta-light-grey p-4 h-20 w-20 bg-white">
            <Image src={Metamask} alt="Innercomponent" className="h-12 w-16" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-1">
          <span className="text-base font-medium">Available features</span>
          <span className="flex gap-2 justify-center items-center text-sm font-medium text-acta-grey">
            <HiGift className="text-acta-violet" /> Gas-free payments
          </span>
          <span className="flex gap-2 justify-center items-center text-sm font-medium text-acta-grey">
            <TbCoin className="text-acta-violet" /> Batch transactions
          </span>
          <span className="flex gap-2 justify-center items-center text-sm font-medium text-acta-grey">
            <IoMdTimer className="text-acta-violet" /> Recurring payments
          </span>
        </div>
        <Connectbutton />
      </div>
    </>
  );
};

export default ConnectModal;
