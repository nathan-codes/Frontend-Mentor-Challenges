import Image from "next/image";
import staricon from "../../../public/icon-star.svg";

function RatingCard() {
  return (
    <article className="w-[470px]   bg-[#182a47] text-white  rounded-[40px]  flex flex-col  border-4 justify-center space-y-6 p-8">
      <span className="border rounded-full w-fit p-3">
        <Image src={staricon} className="w-5" />
      </span>

      <h1 className="text-3xl font-bold">How did we do ?</h1>

      <p className="text-lightGray text-lg">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div id="ratings" class="flex justify-between">
        <button className="bg-[#263238]  rounded-full flex items-center justify-center w-[55px] h-[55px]"> 1 </button>
        <button className="bg-[#263238]  rounded-full flex items-center justify-center w-[55px] h-[55px]"> 1 </button>
        <button className="bg-[#263238]  rounded-full flex items-center justify-center w-[55px] h-[55px]"> 1 </button>
        <button className="bg-[#263238]  rounded-full flex items-center justify-center w-[55px] h-[55px]"> 1 </button>
        <button className="bg-[#263238]  rounded-full flex items-center justify-center w-[55px] h-[55px]"> 1 </button>
      </div>

      <button className="rounded-full bg-orange py-3 text-xl font-bold hover:bg-white transition-all hover:text-orange ">
        SUBMIT
      </button>
    </article>
  );
}

export default RatingCard;
