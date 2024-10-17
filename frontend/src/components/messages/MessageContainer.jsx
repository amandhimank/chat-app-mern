import React, { useEffect, useState } from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';
import NoChatSelected from './NoChatSelected';
import { useConversationContext } from '../../../utils/context/ConversationContext';

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversationContext();

  useEffect(() => {

    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  return (
    <div className='md:w-[45vw] flex flex-col'>
      {selectedConversation ? (
        <>
          <div className='bg-blue-500/20 px-4 py-4 mb-2'>
            <span className='label-text text-zinc-200'>To:</span>{" "}
            <span className='text-gray-900 font-bold'>{selectedConversation.fullname}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      ) : <NoChatSelected />}
    </div>

  )
}

export default MessageContainer;