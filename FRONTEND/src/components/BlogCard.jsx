const BlogCard = () => {
  return (
    <div className=" flex gap-20 overflow-x-auto px-16  ">
      <div className=" w-70 shrink-0 rounded-xl shadow-xl backdrop-blur-lg overflow-hidden bg-white">
        <div
          className=" h-40 bg-cover rounded bg-no-repeat
             bg-[url(https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUl8ZW58MHx8MHx8fDA%3D)]   "
        ></div>
        <button className="px-4  mx-4 my-2 text-white bg-blue-600 text-xl font-medium rounded-xl">
          Tech
        </button>
        <p className="px-4 font-semibold text-xl leading-6 ">
          The Future of AI in Everyday Life.
        </p>
        <p className="pl-4 pr-8 py-1 font-medium text-sm text-zinc-600">
          Artificial Intelligence is becoming part of daily life.
        </p>
        <button className=" pl-4 pb-6 font-semibold text-lg"> More</button>
      </div>

      <div className=" w-70 shrink-0 rounded-xl shadow-xl backdrop-blur-lg overflow-hidden bg-white">
        <div
          className=" h-40 bg-cover rounded bg-no-repeat
             bg-[url(https://images.unsplash.com/photo-1506097425191-7ad538b29cef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D)]   "
        ></div>
        <button className="px-4  mx-4 my-2 text-white bg-emerald-600 text-xl font-medium rounded-xl">
          Design
        </button>
        <p className="pl-4 pr-12 font-semibold text-xl leading-6 ">
          Basics of UI/UX Design for Beginners.
        </p>
        <p className="pl-4 pr-8 py-1 font-medium text-sm text-zinc-600">
          UI/UX design focuses on how users interact with a product.
        </p>
        <button className=" pl-4 pb-6 font-semibold text-lg"> More</button>
      </div>

      <div className=" w-70 shrink-0 rounded-xl shadow-xl backdrop-blur-lg overflow-hidden bg-white">
        <div
          className=" h-40 bg-cover rounded bg-no-repeat
             bg-[url(https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlmZXN0eWxlfGVufDB8fDB8fHww)]   "
        ></div>
        <button className="px-4  mx-4 my-2 text-white bg-cyan-900 text-xl font-medium rounded-xl">
          Lifestyle
        </button>
        <p className="px-4 font-semibold text-xl leading-6 ">
          10 Daily Habits for a Happier Life
        </p>
        <p className="pl-4 pr-8 py-1 font-medium text-sm text-zinc-600">
          Simple habits can improve your happiness life .
        </p>
        <button className=" pl-4 pb-6 font-semibold text-lg"> More</button>
      </div>

      <div className=" w-70 shrink-0 rounded-xl shadow-xl backdrop-blur-lg overflow-hidden bg-white">
        <div
          className=" h-40 bg-cover rounded bg-no-repeat
             bg-[url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww)]   "
        ></div>
        <button className="px-4  mx-4 my-2 text-white bg-yellow-500 text-xl font-medium rounded-xl">
          Travel
        </button>
        <p className="pl-4 pr-18 font-semibold text-xl leading-6 ">
          Top 7 Must-Visit Places in India
        </p>
        <p className="pl-4 pr-8 py-1 font-medium text-sm text-zinc-600">
          India offers diverse travel experiences.
        </p>
        <button className=" pl-4 pb-6 font-semibold text-lg"> More</button>
      </div>
    </div>
  );
};

export default BlogCard;
