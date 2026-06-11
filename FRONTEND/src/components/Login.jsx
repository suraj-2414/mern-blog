import axios from "axios";
import { Smile } from "lucide-react";
import { Handshake } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { DisplayerContext } from "../context/DisplayContext";
const Login = () => {
  const { count, setCount } = useContext(DisplayerContext);
  const [loginfo, setLoginfo] = useState({
    username: "",
    password: "",
  });
  const [btn, setBtn] = useState("Log In");
  const navigate = useNavigate();
  const passref = useRef();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      passref.current.focus();
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/auth/login", loginfo, {
        withCredentials: true,
      })
      .then((res) => {
        const token = res.data.accessToken;
        localStorage.setItem("TOKEN", token);
        setBtn("You are looged in");
        setCount(2);
        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        setBtn("Invalid Credentials");
        setTimeout(() => {
          setBtn(" Plz Try Again");
        }, 1000);
      });
    setLoginfo({
      username: "",
      password: "",
    });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginfo({ ...loginfo, [name]: value });
  };

  return (
    <div className="flex flex-col  justify-center items-center w-full pb-12 bg-no-repeat bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1764687752846-9f2d008c97f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzNnxpVUlzblZ0akIwWXx8ZW58MHx8fHx8)]">
      <h1
        className={`${count == 1 ? "flex" : "hidden"} mt-1  gap-2  font-semibold text-xl`}
      >
        Thanks For Signing Our Site
        <span className="mt-1 ">
          <Smile />
        </span>
      </h1>
      <h2 className="m-2 font-medium ">
        Now Login With Your User Id and Password{" "}
      </h2>

      <form
        onSubmit={submitHandler}
        className={`flex   flex-col gap-4 rounded-xl text-xl  px-6 py-10 border-2 border-black/50 bg-white/20 backdrop-blur-xs m-4   `}
      >
        <span className="flex justify-center">
          <Handshake className="w-14 h-14" strokeWidth={1.25} />
        </span>

        <input
          onChange={handleInput}
          value={loginfo.username}
          name="username"
          className=" border rounded px-3 py-1 outline-none"
          type="text"
          placeholder="Enter Username"
          spellCheck="false"
          onKeyDown={handleEnter}
          autoFocus
          required
        />
        <input
          onChange={handleInput}
          value={loginfo.password}
          name="password"
          className=" border rounded px-3 py-1 outline-none "
          type="password"
          placeholder="Enter Password"
          ref={passref}
        />
        <button className=" border rounded my-4 px-3 py-1   active:scale-95">
          {btn}
        </button>
        <Link className="font-semibold text-xl" to="/signIn">
          Don't have an Account ?
          <span className=" text-blue-800 cursor-pointer">Sign In</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
