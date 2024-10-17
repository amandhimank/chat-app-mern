import React from 'react'
import { useAuthContext } from '../../../utils/context/AuthContext';
import { useConversationContext } from '../../../utils/context/ConversationContext';
import { extractTime } from '../../../utils/extractTime';

function Message({ message }) {
    const { authUser } = useAuthContext();
    const { selectedConversation } =  useConversationContext();
    const { user } = authUser;

    const fromMe = message.senderId === user._id;
    
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? user?.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-yellow-500" : "";
    const shakeClass = message.shouldShake ? "shake" : "";

    return (
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-9 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={profilePic} />
                    </div>
                </div>
                <div className={`chat-bubble text-zinc-200  ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
                <div className="chat-footer opacity-50 text-xs">{extractTime(message.createdAt)}</div>
            </div>
    )
}

export default Message;