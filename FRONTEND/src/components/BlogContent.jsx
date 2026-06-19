import React from 'react'

const BlogContent = ({item}) => {
  let clr= 'bg-transparent'
  if(item.category==='Tech'){
     clr= 'bg-blue-600' 
  }
  if(item.category==='Travel'){
     clr= 'bg-yellow-500' 
  }
  if(item.category==='Lifestyle'){
     clr= 'bg-cyan-900' 
  }
  if(item.category==='Design'){
     clr= 'bg-emerald-600'
  }
  return (
    <div className=' h-62 md:h-96  border bg-white/20 border-black/20 cursor-pointer backdrop-blur-lg rounded-xl'>
       <div className='flex h-8 pt-2 items-center justify-center '>
              <h1 className= 'text-center   text-xs md:text-xl px-1 md:px-1 md:py-3  font-medium'> { item.title}</h1>
       </div>
       <p className=' text-xs md:text-lg pl-4 h-25 md:h-50 wrap-anywhere pr-6  overflow-auto text-zinc-600 '>{item.content}</p>
       <div className='flex gap-6    md:justify-between pl-3 md:pr-22' >
             <h4 className='text-xs md:text-sm font-medium'>Category :</h4>
             <h4 className='text-xs md:text-sm font-medium'>Author:</h4>
       </div>
       <div className='flex pl-2 md:pl-8 gap-8 md:gap-0 md:justify-between'>
              <button className={ `px-2.5  py-1 md:px-4 my-2 ${clr}  md:mx-4 text-white text-sm md:text-xl font-medium rounded-2xl`}>{item.category}</button>
              <div className= 'px-2 md:px-4 py-1 md:mx-4  my-2 text-black bg-[#60b6ad]  text-sm md:text-xl font-medium rounded-2xl'>{item.author}</div>
       </div>
       <div className='flex pl-6 md:pl-12  justify-end px-4 font-semibold pt-4 md:pt-6'>
             <div>Date :</div>
             <div className='pl-2' >{item.date}</div>

           
       </div>
        
    </div>
  )
}

export default BlogContent