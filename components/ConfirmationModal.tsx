import Image from "next/image";
import InnerComponent from "../assets/inner-component.svg";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiGift } from "react-icons/hi";
import { TbCoin } from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";
import Connectbutton from "./Connectbutton";
import Metamask from "../assets/metamask.png";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { setRefreshPage } from "../state/appstate";

const ConfirmationModal = (props: {}) => {
  const dispatch = useAppDispatch();
  const refreshPage = useAppSelector((state) => state.appState.refreshPage);
  return (
    <>
      <div
        className={`flex flex-col py-9 px-10 justify-start items-center lg:w-1/3 xl:w-96 sm:w-1/2 h-auto bg-violet-50 rounded-3xl text-center gap-4 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 z-50 transition ease-in-out ${
          !refreshPage ? "-top-1/2 duration-1000" : "top-1/2 duration-1000"
        }`}
      >
        <span className="text-xl font-semibold">Switch Network</span>
        <span className="text-acta-grey text-sm font-medium">
          Do you really want to switch network or account?
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
        <div className="flex w-full gap-4 justify-center items-center">
          <button
            className="w-full h-10 flex justify-center items-center bg-white py-1 px-4 font-semibold text-lg rounded-full text-black gap-2 cursor-pointer"
            onClick={(e) => {
              dispatch(setRefreshPage(false));
            }}
          >
            Cancel
          </button>
          <button
            className="w-full h-10 flex justify-center items-center bg-gradient-to-r from-acta-violet-3 to-acta-violet-4 py-1 px-4 font-semibold text-lg rounded-full text-white gap-2 cursor-pointer"
            onClick={(e) => {
              window.location.reload();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
