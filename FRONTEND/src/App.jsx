import { useEffect } from "react"
import Nav from "./components/Nav"
import Login from "./components/Login"
import HomePage from './pages/HomePage'
import BlogPage from "./pages/BlogPage"
import Signin from "./components/Signin"
import CreatePage from "./pages/CreatePage"
import ProtectRoute from "./components/ProtectRoute"
import { Route, Routes, useNavigate } from "react-router-dom"

const App = () => {
const navigate = useNavigate()
  useEffect(() => {
    navigate("/")
  }, [])
  
  return (
    <div className=' min-h-screen w-full   text-black '>
      <Nav/>
      <Routes>
         {/* public Routes */}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signIn" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>

        {/* Protected Routes */}
        <Route  element={<ProtectRoute/>}>
             <Route path="/blog" element={<BlogPage/>}/>
             <Route path="/create" element={<CreatePage/>}/>
        </Route>
      </Routes>
      
     
    </div>
  )
}

export default App
 