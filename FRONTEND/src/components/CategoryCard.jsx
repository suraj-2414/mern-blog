import React, { useContext } from 'react'
import { DisplayerContext } from '../context/DisplayContext'
import { Link } from 'react-router-dom'

const CategoryCard = () => {
   const{setActiveCategory}=useContext(DisplayerContext)
  return (
    <div >
        <div className=' flex justify-evenly    px-0 md:px-16'>
          {/* TECH */}
           <Link to ='/blog'>
            <button onClick={()=>{
              setActiveCategory('Tech') 
            }}
             className='active:shadow-xl '>
              <div className='TECH relative h-22 w-22 md:h-50 md:w-60   bg-cover bg-no-repeat   bg-center 
              bg-[url(https://plus.unsplash.com/premium_vector-1726874959732-cec6b73d31da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8fDA%3D)]'>
                     <h5 className='absolute left-2 md:left-4 text-lg md:text-2xl font-medium '>Tech</h5>
              </div>
            </button>
           </Link>

           {/* TRAVEL */}
             <Link to='/blog'>
             <button onClick={()=>{
              setActiveCategory('Travel')  
            }}
             className='active:shadow-xl '>
               <div className='TRAVEL relative  h-22 w-22  md:h-27 md:w-30 lg:h-50 lg:w-60 bg-cover bg-no-repeat   bg-center
               bg-[url(https://plus.unsplash.com/premium_vector-1718336283013-29356ed4ab39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D)]'>
               <h5 className='  text-lg md:text-2xl absolute left-0 md:left-4 font-medium px-3'>Travel</h5>
               </div>
             </button>
             </Link>

            {/* LIFESTYLE */}
            <Link to='/blog'>
             <button onClick={()=>{
              setActiveCategory('Lifestyle')  
            }}
             className='active:shadow-xl '>
               <div className=' LIFESTYLE relative  h-22 w-22 md:h-50 md:w-60   bg-cover bg-no-repeat   bg-center
                bg-[url(https://plus.unsplash.com/premium_vector-1682298835911-1e2d6345670c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoeSUyMGxpZmVzdHlsZXxlbnwwfHwwfHx8MA%3D%3D)]'>
                 <h5 className='absolute left-0 md:left-4  text-lg md:text-2xl font-medium px-3'>Lifestyle</h5>
              </div>
             </button>
            </Link>
            {/* DESIGN */}
            <Link to='/blog'>
           <button onClick={()=>{
              setActiveCategory('Design')  
            }}
             className='active:shadow-xl '>
             <div className=' DESIGN  relative  h-22 w-22 md:h-50 md:w-60   bg-cover bg-no-repeat   bg-center
             bg-[url(https://plus.unsplash.com/premium_vector-1725682376725-781172349ae6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNyZWF0aXZlfGVufDB8fDB8fHww)] '>
                 <h5 className='  text-lg md:text-2xl absolute  left-0 md:left-4 font-medium px-3'>Design</h5>
            </div> 
           </button>
           </Link>  
        </div>
    </div>
  )
}

export default CategoryCard