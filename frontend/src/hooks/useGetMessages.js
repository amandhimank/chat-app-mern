import React, { useEffect, useState } from 'react'
import { useConversationContext } from '../../utils/context/ConversationContext';
import { API_URL } from '../../utils/constants';
import { toast } from 'react-toastify';

function useGetMessages() {
    const [ loading, setLoading ] = useState();
    const { messages, setMessages, selectedConversation } = useConversationContext();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(API_URL + "/message/" + selectedConversation._id, {
                    method: "GET",
                    credentials: 'include'
                })
                const data = await res.json();
                if(data.error) throw new Error(data.error);
                setMessages(data.messages || []);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        if (selectedConversation?._id) getMessages();

    }, [selectedConversation._id])

    return { messages, loading };
}

export default useGetMessages