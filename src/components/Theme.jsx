import React, { useState } from 'react'

function Theme() {
    const [theme,setTheme]=useState("light");
    const changeTheme=(selectTheme)=>{
        document.documentElement.classList.remove("dark","pastel");
        if(selectTheme!=="light")
        {
            document.documentElement.classList.add(selectTheme);
        }
        setTheme(selectTheme);
    }
  return (
    <div > 
        <div className='flex gap-4'>
            <button onClick={()=>changeTheme("light")} className='px-4 py-2 bg-blue-500 text-white hover:scale-105 shadow transition-transform rounded'>Light</button>
            <button onClick={()=>changeTheme("dark")} className='px-4 py-2 bg-gray-700 text-white hover:scale-105 shadow transition-transform rounded'>Dark</button>
            <button onClick={()=>changeTheme("pastel")} className='px-4 py-2 bg-pink-500 text-white hover:scale-105 shadow transition-transform rounded'>Pastel</button>
        </div>
      
    </div>
  )
}

export default Theme
