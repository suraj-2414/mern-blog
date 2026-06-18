import { useContext } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import CategoryCard from "../components/CategoryCard";
import { DisplayerContext, useDisplayContext } from "../context/DisplayContext";

const Home = () => {
  // const{count} = useContext(DisplayerContext)
  const { count } = useDisplayContext();

  // console.log("count --->", count);
  return (
     
    <div className=" h-full  bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1689850969062-f7e0a6c45a4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHdhdnklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww)]   ">
      
       <div className="HERO SECTION  flex justify-between w-full   pt-8 pb-12  lg:px-12 px-0 ">
        <div className="LEFT PART w-1/2  md:p-13 p-6 lg:text-5xl md:text-4xl text-xl">
          <h2 className="   font-semibold tracking-wide">Discover Stories,</h2>
          <h2 className="   font-semibold tracking-wide ">ideas & thoughts</h2>
          <span className="   text-zinc-700  lg:text-lg md:text-lg  text-[10px] leading-1">
            Read and Write Blogs that Matters.
          </span>
          <div className={ `SIGN-UP/Login   ${count == 0 ? "flex" : "hidden"} justify-evenly mx-12 gap-4 py-6`   }>
            <Link to="/signIn">
              <button className=" whitespace-nowrap px-6  py-2 lg:px-5 lg:py-2  text-sm md:text-lg lg:text-xl  font-medium text-black bg-[#60b6ad] rounded-4xl active:scale-95">
                Sign up
              </button >
            </Link>
            <Link to="/login">
              <button className="whitespace-nowrap px-6  py-2 lg:px-5 lg:py-2  text-sm  md:text-lg lg:text-xl    font-medium text-[#60b6ad] bg-[#151514] rounded-4xl active:scale-95">
                Log in 
              </button >
            </Link>
          </div>
          <div
            className={` BUTTONS  ${count !== 2 ? "hidden" : "flex"} gap-4 mt-4`}
          >
            <Link to="/blog">
              <button className="px-4 text-xl py-2 border rounded-3xl font-semibold active:scale-95 text-black bg-[#60b6ad] ">
                Start Reading
              </button>
            </Link>
            <Link to="/create">
              <button className="px-4 text-xl py-2 border rounded-3xl font-semibold active:scale-95 text-white bg-zinc-700 ">
                Write a Blog
              </button>
            </Link>
          </div>
        </div>
        <div
          className=" RIGHT PART lg:h-90 lg:w-90 md:h-80  md:w-80 sm:h-48 sm:w-48  h-36 w-38 md:mt-2  mt-7 md:mr-14 mr-8  bg-[url(https://plus.unsplash.com/premium_vector-1721296174014-8cdae5be292b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8)] 
            rounded-full bg-cover bg-no-repeat rotate-y-180"
        ></div>
      </div>

      <div
        className={`  HIDE PART ${count !== 2 ? "hidden" : "flex"}  flex-col`}
      >
        <div className="FEATURED SECTION  ">
          <h1 className="text-4xl px-32 py-2  font-medium backdrop-blur-xs  border border-white/40 bg-white/20 shadow-xl  ">
            Featured Blogs
          </h1>
          <div className="py-20  ">
            <Link to="/blog">
              <BlogCard />
            </Link>
          </div>
        </div>
        <div className="CATEGORY SECTION  ">
          <h2 className="text-4xl px-32 py-3  font-medium backdrop-blur-xs  border border-white/40 bg-white/20 shadow-xl  ">
            Explored by Category
          </h2>
          <div className="py-14  ">
            <CategoryCard />
          </div>
        </div>
        <div
          className="FOOTER SECTION  border   bg-no-repeat bg-cover bg-center 
           bg-[url(https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFya3xlbnwwfHwwfHx8MA%3D%3D)] "
        >
          <div className="flex flex-col mt-6 justify-center gap-3 items-center">
            <h3 className="text-white text-4xl font-medium ">
              Have a story to tell ?
            </h3>
            <h4 className="text-white text-4xl font-medium">
              Start writing on BlogNest today.
            </h4>
            <Link to="/create">
              <button className=" bg-[#60b6ad] active:scale-105 font-medium text-xl px-4 py-2 rounded-3xl my-6">
                Create Your First Blog
              </button>
            </Link>
          </div>
          <div className="bg-black/50 px-20 py-3 flex justify-between ">
            <h4 className="text-white text-xl">BlogNest @ 2026</h4>
            <div className="text-white flex  gap-8 text-lg">
              <span>About </span>
              <span> Contact</span>
              <span> Github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
