import React, { useEffect, useState } from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';
import NoChatSelected from './NoChatSelected';
import { useConversationContext } from '../../../utils/context/ConversationContext';
import { IoArrowBackSharp } from 'react-icons/io5';

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversationContext();

  useEffect(() => {

    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  return (
    <div className={`${selectedConversation ? "flex flex-col w-full" : "hidden"} md:w-[45vw] md:flex md:flex-col`}>
      {selectedConversation ? (
        <>
          <div className='bg-blue-500/20 px-4 py-4 mb-2 flex justify-between items-center'>
          <span className='md:hidden mr-6 bg-yellow-500 p-2 flex rounded-full justify-center items-center' onClick={() => setSelectedConversation(null)}><IoArrowBackSharp className='size-6 text-white' /></span>
            <div>
              <span className='label-text text-zinc-200'>To:</span>{" "}
              <span className='text-gray-900 font-bold'>{selectedConversation.fullname}</span>
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      ) : <NoChatSelected />}
    </div>

  )
}

export default MessageContainer;