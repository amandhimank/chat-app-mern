import React from 'react'
import { BsSend } from "react-icons/bs";

function MessageInput() {
  return (
    <form className='px-4 py-3'>
        <div className='relative w-full'>
            <input type="text" className='border test-sm rounded-lg block w-full p-2.5 bg-gray-700/40 border-gray-600 text-white' placeholder='Send a message' />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3' ><BsSend className='size-5 text-white' /></button>
        </div>
    </form>
  )
}

export default MessageInput