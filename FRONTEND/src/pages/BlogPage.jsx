import axios from "axios";
import { useState } from "react";
import { useContext, useEffect } from "react";
import BlogContent from "../components/BlogContent";
import { DisplayerContext } from "../context/DisplayContext";

const BlogPage = () => {
  const { activeCategory, setActiveCategory } = useContext(DisplayerContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/data/get")
    .then((res) => {
      setData(res.data.blogs);
    })
  }, [activeCategory]);

  let Tabs = ["All", "Tech", "Travel", "Lifestyle", "Design"];

  let fdata = [];
  if (activeCategory === "All") {
    fdata = data;
  } else {
    fdata = data.filter((blog) => blog.category === activeCategory);
  }
  return (
    <div className="min-h-screen border bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)]">
      <div className="flex justify-evenly border backdrop-blur-xs border-white/80 py-4 bg-white/30">
        {Tabs.map(function (elem, idx) {
          return (
            <button
              onClick={() => {
                setActiveCategory(elem);
              }}
              key={idx}
              className={`${activeCategory === elem ? "bg-[#60b6ad]" : "bg-transparent"} px-4  py-1 rounded-xl border-2 active:scale-95 transition border-black/30 font-semibold  hover:border-[#60b6ad] text-xl`}
            >
              {elem}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-4  px-2 py-4  ">
        {fdata.map(function (item, idx) {
          return (
            <div key={idx}>
              <BlogContent item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
