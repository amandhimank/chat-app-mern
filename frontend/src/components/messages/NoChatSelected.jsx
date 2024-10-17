import React from 'react'
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from '../../../utils/context/AuthContext';

function NoChatSelected() {
  const { authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
            <p className=''>Welcome 👋 <span className='text-yellow-400'>{authUser.user.fullname}</span></p>
            <p>Select a chat to start messaging</p>
            <TiMessages className='text-3xl md:text-6xl text-center' />
        </div>
    </div>
  )
}

export default NoChatSelected;