import React from 'react'

function RatingCard() {
  return (
    <article className="w-[500px] h-[400px]  bg-[Green]  rounded-[40px]  flex flex-col  border-4 justify-center space-y-4">
      <span>star image</span>

      <h1>How did we do ?</h1>

      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div>buttons</div>

      <button>Submit</button>
    </article>
  );
}

export default RatingCard
