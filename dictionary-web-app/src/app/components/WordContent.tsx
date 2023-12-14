interface WordContentProps {
  meaningList?: string[];
}

function WordContent({ meaningList }: WordContentProps) {
  return (
    <section>
      <span className="text-neutral-500 text-xl font-normal">Meaning</span>
      <ul className=" text-purple-500 list-disc list-inside md:p-3 py-2 marker:text-[#8F19E8] space-y-3">
        {/* <li ">
          (etc.) A set of keys used to operate a typewriter, computer etc
        </li> */}
              {meaningList?.map((item,index) => {
                  return <li className="text-zinc-800 text-lg dark:text-[#fff] font-normal leading-normal" key={index}> {item}</li>
              })}
      
      </ul>
    </section>
  );
}

export default WordContent;
