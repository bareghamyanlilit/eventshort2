"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import { FaMusic } from "react-icons/fa";

export function Envelop({ openEnvelope, setOpenEnvelope }: any) {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`FontArmDecorativeU${openEnvelope ? "hidden" : ""} bg-[#2f1d00] w-screen h-screen overflow-hidden flex py-50 `}
    >
      <div className=" m-auto mt-10 relative w-75 h-25 md:w-150 md:h-50">
        <div className="TopBlack absolute z-5 md:-top-100 md:w-400 md:h-100 -top-50 w-200 h-50 bg-[#2f1d00]"></div>
        <div className="BottomBlack absolute z-10 md:top-100 md:-right-50 md:w-400 md:h-100 top-50 -right-25 w-200 h-50 bg-[#2f1d00]"></div>
        <div className="LeftBlack absolute z-10 md:-left-100 md:-top-50 md:w-100 md:h-300 -left-50 -top-25 w-50 h-150 bg-[#2f1d00]"></div>
        <div className="RightBlack absolute z-10 md:-right-100 md:-top-50 md:w-100 md:h-300 -right-50 -top-25 w-50 h-150 bg-[#2f1d00]"></div>

        {/* <div className=" absolute z-0 md:top-0 md:w-150 md:h-100  top-0 w-75 h-50 bg-[#ffffff]"></div> */}

        <div
          style={{ backgroundImage: 'url("/first.png")' }}
          className={` overflow-hidden rounded-xs absolute ${open ? " animate-bounceY z-50 w-screen h-screen -top-60 left-1/2 -translate-x-1/2  " : ""} transition-all duration-700 ease-in-out bg-cover bg-center content-center gap-3 md:top-5 md:w-140 md:h-90 md:left-5  w-70 h-45  bg-[#ffffff] text-black text-center text-base`}
        >
          <div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={` ${open ? "block" : "hidden"} fixed z-10 text-2xl  rounded-2xl border-[#C4A149] border opacity-95 text-[#C4A149] right-7 top-7 w-15  h-15 flex justify-center items-center `}
            >
              <FaMusic />
            </button>

            <MusicPlayer isPlaying={isPlaying} />
          </div>

          <div className="px-12">
            <div className="mt-20 border flex flex-col gap-3 text-[#C4A149] border-[#C4A149] rounded-t-[190px] py-10 px-5">
              <h2 className="FontArmDecorativeU text-xl tracking-[5] mb-4">
                Սիրելիներս
              </h2>
              <p className="FontArmDecorativeU text-lg">
                Սիրով հրավիրում ենք
                <br /> Աննայի և Խաչէի
                <br /> սուրբ մկրտությանը որը տեղի կունենա
              </p>
              <h3 className=" tracking-[3] FontArmDecorativeU text-xl">
                24 / 03 / 2026
              </h3>
              <p className="FontArmDecorativeU text-lg">
                13:00 Ս․ Գայանե Եկեղեցում
              </p>
            </div>
          </div>
          <div className="mt-12 text-[#C4A149] text-start px-10">
            <p className="text-xl FontArmDecorativeU">Հեռախոսահամար</p>

            <Link
              href="tel:+374 77 77 77 7"
              className="FontArmDecorativeU text-lg"
            >
              077-77-77-77
            </Link>
          </div>
        </div>

        <div
          className={`absolute ${open ? "z-5" : "z-1"} transition-all duration-100 md:-top-54 md:left-22 md:w-106 md:h-106 -top-27 left-11 w-53 h-53 rotate-45`}
          style={{ background: "linear-gradient(125deg, white, #baa26f)" }}
        ></div>
        <div
          className={`RightGreen  ${open ? "z-6" : "z-1"} absolute z-2 md:top-16 md:left-85 md:w-106 md:h-140 top-8 left-42.5 w-53 h-70 rotate-45`}
          style={{ background: "linear-gradient(-90deg, white, #baa26f)" }}
        ></div>
        <div
          className={`LeftGreen  ${open ? "z-6" : "z-1"} absolute z-2 md:top-11 md:right-90 md:w-140 md:h-106 top-5.5 right-45 w-70 h-53  rotate-45`}
          style={{ background: "linear-gradient(90deg, white, #baa26f)" }}
        ></div>

        <img
          src="/forenvelope.png"
          alt="envelop"
          onClick={() => {
            setOpen(!open);
            setIsPlaying(!isPlaying);
          }}
          className={` ${open ? "opacity-0" : "opacity-100"} transition-all duration-100  absolute cursor-pointer md:top-50 md:left-60 md:w-30 md:h-30 top-25 left-30 z-20 w-15 h-15 `}
        />
      </div>
    </div>
  );
}
