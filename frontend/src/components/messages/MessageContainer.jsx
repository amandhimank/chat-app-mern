import React, { useState } from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';
import NoChatSelected from './NoChatSelected';

function MessageContainer() {
    const [ chatSelected, setChatSelected ] = useState(false);
  return (
    <div className='md:min-w-[45vw] flex flex-col'>
        {chatSelected ? (<>
            <div className='bg-blue-500/20 px-4 py-4 mb-2'>
                <span className='label-text'>To:</span>{" "}
                <span className='text-gray-900 font-bold'>John Doe</span>
            </div>
            <Messages />
            <MessageInput />
        </>) : <NoChatSelected />}
    </div>

  )
}

export default MessageContainer;