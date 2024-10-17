import React, { useEffect, useState } from 'react'
import Conversation from './Conversation'
import { API_URL } from '../../../utils/constants';
import { toast } from 'react-toastify';
import { getRandomEmoji } from '../../../utils/emojis';
import useGetConversations from '../../hooks/useGetConversations';

function Conversations() {
  const { loading, conversations } = useGetConversations();

  return (
    <div className='py-1 flex flex-col overflow-auto'>
        {loading ? (
          <span className="loading loading-dots loading-lg text-center"></span>
        ) : (
          conversations.map((conversation, idx) => <Conversation key={conversation._id} data={conversation} emoji={getRandomEmoji()} lastIdx={idx === conversations.length - 1}  />)
        )}
    </div>
  )
}

export default Conversations