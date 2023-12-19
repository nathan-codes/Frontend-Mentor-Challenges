import React from "react";
import Image from "next/image";
import IconDivider from "../../../public/images/pattern-divider-mobile.svg";
import BookmarkIcon from "../../../public/images/icon-dice.svg";
function AdviceCard() {
  return (
    <article className="m-4 py-10 px-4 rounded-[40px] max-w-[45rem] flex justify-center flex-col items-center  bg-gradient-to-r from-[#675a9b] to-[#000]">
      <div className="flex flex-col  items-center justify-between space-y-10">
        <h2 className="text-emerald-300 text-xl font-normal  tracking-[3px] italic uppercase" >
          Advice #117
        </h2>
        <h1 className="text-white text-lg font-light text-center">
          " It is easy to sit up and take notice, what’s difficult is getting up
          and taking action.”
        </h1>

        <Image src={IconDivider} alt="Divider Icon" />
      </div>
      <div className="relative  bg-secondary p-6 rounded-full top-[4.6rem]">
        <Image src={BookmarkIcon} alt="Bookmark icon" />
      </div>
    </article>
  );
}

export default AdviceCard;
