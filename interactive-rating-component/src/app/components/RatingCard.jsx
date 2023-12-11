import Image from "next/image";
import staricon from "../../../public/icon-star.svg";

function RatingCard() {
  return (
    <article className="w-[470px] h-[420px]  bg-[#05014A] text-white  rounded-[40px]  flex flex-col  border-4 justify-center space-y-6 p-8">
      <span className="border rounded-full w-fit p-3">
        <Image src={staricon} className="w-5" />
      </span>

      <h1 className="text-3xl font-bold">How did we do ?</h1>

      <p className="text-lightGray text-lg">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div>
        <div id="ratings" class="flex gap-5   h-14 border">
          <button
            type="button"
            class="rating-item rounded-full border bg-gray-dark w-full h-full flex justify-center items-center text-gray-text hover:bg-gray-light hover:text-whiteish transition-colors duration-[400ms] ease-in-out"
          >
            1
          </button>
          <button
            type="button"
            class="rating-item rounded-full bg-gray-dark w-full h-full flex justify-center items-center text-gray-text hover:bg-gray-light hover:text-whiteish transition-colors duration-[400ms] ease-in-out"
          >
            2
          </button>
          <button
            type="button"
            class="rating-item rounded-full bg-gray-dark w-full h-full flex justify-center items-center text-gray-text hover:bg-gray-light hover:text-whiteish transition-colors duration-[400ms] ease-in-out"
          >
            3
          </button>
          <button
            type="button"
            class="rating-item rounded-full bg-gray-dark w-full h-full flex justify-center items-center text-gray-text hover:bg-gray-light hover:text-whiteish transition-colors duration-[400ms] ease-in-out"
          >
            4
          </button>
          <button
            type="button"
            class="rating-item rounded-full bg-gray-dark w-full h-full flex justify-center items-center text-gray-text hover:bg-gray-light hover:text-whiteish transition-colors duration-[400ms] ease-in-out"
          >
            5
          </button>
        </div>
      </div>

      <button>Submit</button>
    </article>
  );
}

export default RatingCard;
