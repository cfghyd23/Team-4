import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex bg-black items-center justify-between p-1 z-[100] w-full'>
      
      <h1 className='text-orange-600 text-2xl pl-2 font-bold cursor-pointer'> Marpu foundation</h1>
      
      <div>
    <button className='pr-4 mr-10 items-center text-white'> Economic Development </button>
   
    <button 
    className='bg-black px-6 py-2 rounded cursor-pointer text-white'> Username </button>
    
    </div> 
     
    </div>
    </>
  )
}

export default Navbar
