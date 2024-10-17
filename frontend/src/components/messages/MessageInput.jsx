import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';
import { toast } from 'react-toastify';

function MessageInput() {
  const [ message, setMessage ] = useState('');
  const { loading, sendMessage } = useSendMessage();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !message ) {
      return;
    } 
    await sendMessage(message)
    setMessage("");
  }

  return (
    <form className='px-4 py-3' onSubmit={handleSubmit}>
        <div className='relative w-full'>
            <input type="text" className='border test-sm rounded-lg block w-full py-2.5 pl-2.5 pr-10 bg-gray-700/40 border-gray-600 text-white' placeholder='Send a message' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3' disabled={loading} >{loading ? <span className="loading loading-spinner loading-md"></span> : <BsSend className='size-5 text-white' />}</button>
        </div>
    </form>
  )
}

export default MessageInput