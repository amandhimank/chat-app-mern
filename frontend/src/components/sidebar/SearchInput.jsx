import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { useConversationContext } from '../../../utils/context/ConversationContext';
import useGetMessages from '../../hooks/useGetMessages';
import useGetConversations from '../../hooks/useGetConversations';
import { toast } from 'react-toastify';

function SearchInput() {
  const [ search, setSearch ] = useState('');
  const { setSelectedConversation } = useConversationContext();
  const { conversations } =  useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return
    if (search.length < 3) {
      return toast.error("Search term must be atleast 3 characters long")
    }
    const conversation = conversations.find((c) => c.username.toLowerCase().includes(search.toLowerCase()));
    if(conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      toast.error("No such user found!");
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-3'>
      <input type="text" placeholder="Type here" className="input input-bordered rounded-full w-full max-w-xs" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type='submit' className="btn btn-warning btn-circle text-white"><IoSearchSharp className='size-6' /></button>
    </form>
  )
}

export default SearchInput;