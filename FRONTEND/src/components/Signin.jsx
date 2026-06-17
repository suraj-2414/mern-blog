import { useContext, useRef, useState } from "react";
import { CircleUserRound } from "lucide-react";
import { DisplayerContext } from "../context/DisplayContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [signinfo, setSignininfo] = useState({
    username: "",
    password: "",
  });
  const { count, setCount } = useContext(DisplayerContext);
  const navigate = useNavigate();
  const passref = useRef()

  const handleEnter  = (e)=>{
    if (e.key ==="Enter"){
        e.preventDefault()
        passref.current.focus()
    }
  }
  const subHandler = (e) => {
    e.preventDefault();
    axios.post("https://mern-blog-backend-pify.onrender.com/api/auth/register",signinfo)
    .then((res)=>{
      console.log(res.data)
       navigate("/login");
    })
    .catch((err)=>{
      console.log(err)
      alert("User already Exists")
      setSignininfo({
        username: "",
        password: "",
      })
    })
    // setCount(1);
  }

  const handleInput = (e)=>{
    const {name,value}= e.target
    setSignininfo({...signinfo,[name]:value})
  }
  return (

    <div className=" h-100 flex  flex-col justify-center items-center    bg-no-repeat bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1764687752846-9f2d008c97f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzNnxpVUlzblZ0akIwWXx8ZW58MHx8fHx8)]   ">
      
      <form
        onSubmit={subHandler}
        className={` flex flex-col text-xl gap-4 px-6 py-10 rounded-xl border-2 border-black/50 bg-white/20 backdrop-blur-xs    `}
      >
       
        <span className="flex justify-center">
          <CircleUserRound size={62} strokeWidth={1.2} />
        </span>

        <input
          required
          autoFocus
          type="text"
          minLength={3}
          maxLength={20}
          name="username"
          spellCheck="false"
          onChange={handleInput}
          onKeyDown={handleEnter}
          value={signinfo.username}
          placeholder="Enter Username"
          className=" border rounded px-3 py-1 outline-none"
        />
        <input
          required
          ref={passref}
          minLength={6}
          name="password"
          type="password"
          onChange={handleInput}
          value={signinfo.password}
          placeholder="Enter Password"
          className=" border rounded px-3 py-1 outline-none"
        />
        <button
          // onClick={() => {
          //   navigate("/login");
          // }}
          className=" border rounded my-4 px-3 py-1  active:scale-95"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signin;
