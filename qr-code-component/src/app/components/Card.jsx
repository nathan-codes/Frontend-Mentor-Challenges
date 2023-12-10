import Image from "next/image";

function Card() {
  return (
    <article className=" bg-[#FFF] flex flex-col text-center items-center w-[19.6875rem] rounded-[0.9375rem] ">
      <Image
        alt="Image of the QR CODE"
        src="/image-qr-code.png"
        width={280}
        height={280}
        className="mt-[1.12rem] mb-[0.56rem] rounded-[0.9375rem]"
      />
      <h1 className="mb-[1rem] font-bold text-[1.375rem] mx-[1.4rem] text-[#1F3251] leading-normal">
        Improve your front-end skills by building projects
      </h1>
      <p className="text-slate-500 text-[15px] font-normal mx-[2.2rem] mb-[2.8rem]">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </article>
  );
}

export default Card;
