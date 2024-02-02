import Image from "next/image";
import staricon from "../../../public/icon-star.svg";

interface HomeProps  {
  buttonRatings: number[];
  handleSubmit: () => void;
  handleSelect: (rating: number) => void;
};

function RatingCard({buttonRatings,handleSelect,handleSubmit}: HomeProps) {
  return (
    <article className="w-[470px]   bg-gradient-to-r from-[#20262F] to-[#181E27] text-white  rounded-[40px]  flex flex-col  justify-center space-y-6 p-8 ">
      <span className=" bg-[#263238] rounded-full w-fit p-3">
        <Image src={staricon} className="w-5" alt="Star icon" />
      </span>

      <h1 className="text-3xl font-bold">How did we do ? </h1>

      <p className="text-lightGray text-lg">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div id="ratings" className="flex justify-between">
        {buttonRatings.map((ratingNumber, index) => {
          return (
            <button
              key={ratingNumber}
              onClick={() => handleSelect(ratingNumber)}
              className="bg-[#263238]  rounded-full flex items-center justify-center w-[55px] h-[55px] hover:bg-orange hover:text-white focus:bg-slate-500"
            >
              {ratingNumber}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleSubmit}
        className="rounded-full bg-orange py-3 text-xl font-bold hover:bg-white transition-all hover:text-orange"
      >
        SUBMIT
      </button>
    </article>
  );
}

export default RatingCard;
