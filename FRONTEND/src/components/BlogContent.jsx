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
    <div className='  border bg-white/20 border-black/20 cursor-pointer backdrop-blur-lg rounded-xl'>
       <div className='flex justify-center'>
              <h1 className='text-xl  py-2 font-medium'> { item.title}</h1>
       </div>
       <p className='pl-4 h-50 wrap-anywhere pr-6  overflow-auto text-zinc-600 '>{item.content}</p>
       <div className='flex  justify-between pl-3 pr-22' >
             <h4 className='text-sm font-medium'>Category :</h4>
             <h4 className='text-sm font-medium'>Author :</h4>
       </div>
       <div className='flex pl-12 justify-between'>
              <button className={`px-4 ${clr} mx-4 my-2 text-white  text-xl font-medium rounded-2xl`}>{item.category}</button>
              <div className='px-4 py-1 mx-4 my-2 text-black bg-[#60b6ad]  text-lg font-medium rounded-2xl'>{item.author}</div>
       </div>
       <div className='flex pl-12  justify-end px-4 font-semibold pt-8'>
             <div>Date :</div>
             <div className='pl-2' >{item.date}</div>

           
       </div>
        
    </div>
  )
}

export default BlogContent