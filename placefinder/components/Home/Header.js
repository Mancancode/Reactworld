import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 border-b-[5px] border-[#ff3366]'>
        <img src='./Images/logo.png' width={150}/>
        <div>
            <button className='bg-black p-2 px-3 rounded-full text-white'>CREAT POST</button>
            <button className='bg-gray-300 p-2 px-3 border-[1px] rounded-full'>SIGN IN</button>
            <img src='./Images/EbukaPic2.jpeg' width={40} height={40} className='rounded-full'/>
        </div>
    </div>
  )
}

export default Header