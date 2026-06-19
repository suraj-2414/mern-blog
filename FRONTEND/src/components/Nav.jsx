import { useContext } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import { DisplayerContext } from '../context/DisplayContext'

const Nav = () => {
  
    const {count,setCount}= useContext(DisplayerContext)
    const navigate=useNavigate()

    const logout =()=>{
      axios.post("https://mern-blog-backend-pify.onrender.com/api/auth/logout",{},
        {
           withCredentials:true
        })
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>{
          alert("there is occuring an ERROR")
        })
        localStorage.removeItem("TOKEN")
      setCount(0)
      navigate("/")
    }
  return (
    <div className='h-full w-full relative text-white flex   '>
      
      <img src="/blog-app-img.jpg" alt='img' className=' md:h-[30vh] h-[16vh] ' />
       
      <div className="    OVERLAY-DIV flex flex-col justify-center gap-8 md:gap-11  w-full  absolute inset-0 bg-linear-to-b from-black/20 via-black/50 to-black/80">

          <div className=' DATA   items-center  mt-0 md:mt-4  sm:px-8  px-4 md:leading-2 leading-1'>     
                       <h1 className='md:text-3xl text-xl font-sans font-semibold'>BlogNest</h1>
                       <span className='md:text-sm text-xs '>where simple ideas live</span>
          </div>

          <div className='   MENU   flex gap-4 md:gap-12 md:text-xl text-sm  px-6 md:px-5 justify-end '>     
                               <div className={`${count !==2 ?'hidden':'flex' } gap-4 md:gap-12 md:text-xl text-sm  justify-end`}>
                                <Link to='/'>Home</Link>
                                <Link to='/blog'>Blogs</Link>
                                <Link to='/create'>Create </Link>
                               </div>
                               <div  className={`${count ==2 ?'hidden':'flex' }  `}>
                                   <Link to='/login'>Log In</Link> 
                               </div>      
                               <button className={`${count !==2 ?'hidden':'flex' }`}
                               onClick={logout}>
                                   <Link to='/'>Log Out</Link> 
                               </button>      
              </div>
           
      </div>
    </div>
  )
}

export default Nav