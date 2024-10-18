import React from 'react'
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import { useConversationContext } from '../../../utils/context/ConversationContext';

function SideBar() {
  const { selectedConversation } = useConversationContext();
  return (
    <div className={`${selectedConversation ? "hidden" : "flex flex-col w-full"} md:w-fit border-r-2 border-gray-600/30 p-4 md:flex md:flex-col`}>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default SideBar;