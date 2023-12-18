import React from "react";
import Image from "next/image";
import IconDivider from "../../../public/images/pattern-divider-mobile.svg";
import BookmarkIcon from "../../../public/images/icon-dice.svg";
function AdviceCard() {
  return (
    <article className="m-2 p-2 border-2 border-green-500 max-w-[45rem] flex justify-center flex-col items-center space-y-6">
      <h2>Advice #117</h2>
      <h1 className="">
        It is easy to sit up and take notice, what’s difficult is getting up and
        taking action.”
      </h1>

      <Image src={IconDivider} alt="Divider Icon" />

      <div>
        <Image src={BookmarkIcon} alt="Bookmark icon" />
      </div>
    </article>
  );
}

export default AdviceCard;
