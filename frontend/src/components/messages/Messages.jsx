import React, { useEffect, useRef } from 'react'
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

function Messages() {
  const { messages, loading } = useGetMessages();
  
  useListenMessages();
  const lastMessageRef = useRef();
  
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" })
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto w-full'>
        {!loading && messages.length > 0 && (
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef} >
              <Message message={message} />
            </div>
          ))
        )}

        {loading && (
          [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
          )}

        {!loading && messages.length === 0 && (
          <p className='text-center text-zinc-200 text-lg'>Send a message to start the conversation</p>
        )}
    </div>
  )
}

export default Messages;