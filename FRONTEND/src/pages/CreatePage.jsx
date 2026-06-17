import axios from "axios";
import { useContext, useState } from "react";
import { DisplayerContext } from "../context/DisplayContext";

const CreatePage = () => {
      const [query, setQuery] = useState({
          tittle:"",
          content: "",
          category: "",
          author:"",
          date:"",
      }) 
      const handler =(e)=>{
      const {name, value} = e.target
       setQuery({...query,[name]:value});
      }   
       const sub=(e)=>{
        e.preventDefault();
           axios.post("https://mern-blog-backend-pify.onrender.com/api/data/create",{
            body:query
           })
           .then((res)=>{
             console.log(res);
           })
           .catch((err)=>{
             console.log(err);
             alert('there is an error in creating the post')
           })
      }
     
  return (
    <div className="  border px-6 pb-12 bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)]">
      <div className="flex flex-col  items-center py-4  ">
        <h1 className="text-5xl font-medium ">Create New Blog Post </h1>
        <h6 className=" text-xl pt-3 font-medium text-zinc-700">
          Fill out form below to publish your blog post{" "}
        </h6>
      </div>
      <form
        onSubmit={e => sub(e)}
        className=" border mx-12   bg-white/60 border-black/40 rounded-xl px-4 py-6"
      >
        <div className=" flex  ">
          <div className=" LEFT  px-6  w-1/2">


            <div className=" CATEGORY flex justify-between gap-3 pb-8 ">
              <h4 className="text-4xl font-semibold">Category :</h4>
              <input
                onChange={handler}
                value={query.category}
                name="category"
                spellCheck="false"
                className=" border text-xl pl-2 pr-8  py-1 rounded"
                type="text"
                required
                placeholder="Tech,Lifestyle,Travel,Design...."
              />
            </div>

            <div className=" AUTHOR flex justify-between gap-3 pb-8">
              <h4 className="text-4xl font-semibold">Author :</h4>
              <input
                onChange={handler}
                name="author"
                value={query.author}
                spellCheck="false"
                className=" border text-xl pl-2 pr-8 py-1 rounded"
                type="text"
                 required
                placeholder="Enter Author Name here..."
              />
            </div>

            <div className=" TITLE  flex justify-between gap-3 pb-8 ">
              <h4 className="text-4xl font-semibold">Title :</h4>
              <input
                onChange={handler}
                name="tittle"
                value={query.title}
                spellCheck="false"
                className=" border text-xl pl-2 pr-8 py-1 rounded"
                type="text"
                 required
                placeholder="Enter Title here..."
              />
            </div>

            <div className=" DATE flex justify-between gap-3 pb-8">
              <h4 className="text-4xl font-semibold">Date :</h4>
              <input
                onChange={handler}
                name="date"
                value={query.date}
                spellCheck="false"
                className=" border text-xl px-12 py-1 rounded"
                type="date"
                 required
              />
            </div>
          </div>



          <div className="RIGHT w-1/2  px-6 ">
            <div className=" CONTENT  gap-3 pb-8 ">
              <h4 className="text-4xl font-semibold">Content :</h4>
              <textarea
                onChange={handler}
                name="content"
                value={query.content}
                spellCheck="false"
                className=" border h-52 text-xl px-4 py-1 w-full mt-2 rounded"
                type="text"
                 required
                placeholder="Enter Blog content here......"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className=" w-full py-2 text-2xl mx-8 active:scale-95 bg-[#60b6ad] rounded-md font-medium border ">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
