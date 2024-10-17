import React from 'react'
import { useConversationContext } from '../../../utils/context/ConversationContext';
import { useSocketContext } from '../../../utils/context/SocketContext';

function Conversation({ data, emoji, lastIdx }) {
    const { _id, profilePic, username } = data;
    const { selectedConversation, setSelectedConversation } = useConversationContext();

    const isSelected = selectedConversation?._id === _id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(_id);

    return (
        <>
            <div className={`flex gap-2 items-center ${isSelected ? "bg-yellow-500" : null} hover:bg-yellow-500 rounded px-2 py-2 cursor-pointer`} onClick={() => setSelectedConversation(data)}>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src={profilePic} />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{username}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
        </>
    )
}

export default Conversation