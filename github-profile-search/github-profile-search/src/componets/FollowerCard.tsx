const FollowerCard = () => {
  return (
    <article className="flex justify-between  bg-[#F4F7FF] my-4 p-3 sm:p-5 rounded-md">
      <div className="flex flex-col">
        <span>Repo</span>
        <span className="font-bold sm:text-2xl">74</span>
      </div>
      <div className="flex flex-col">
        <span>Followers</span>
        <span className="font-bold sm:text-2xl">2 </span>
      </div>
      <div className="flex flex-col">
        <span>Following</span>
        <span className="font-bold sm:text-2xl">9 </span>
      </div>
    </article>
  );
};

export default FollowerCard;
