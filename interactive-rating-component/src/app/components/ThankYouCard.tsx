import Image from "next/image";
import illustrationIcon from "../../../public/illustration-thank-you.svg";

interface ThankYouCardProp {
  selected: number;
}

function ThankYouCard({ selected }: ThankYouCardProp) {
  return (
    <article className="w-[470px]  bg-gradient-to-r from-[#20262F] to-[#181E27]    rounded-[40px]  flex flex-col  justify-center items-center space-y-6 p-8 py-[2rem]">
      <Image
        src={illustrationIcon}
        className="mx-auto"
        alt="thank you image "
      />

      <h1 className="text-3xl font-bold text-white">Thank you!</h1>
      <p className="border-2  px-5 py-2 rounded-full  text-orange">
        You selected {selected} out of 5{" "}
      </p>
      <p className="text-lightGray text-lg text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </article>
  );
}

export default ThankYouCard;
