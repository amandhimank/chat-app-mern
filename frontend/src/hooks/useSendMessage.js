import { useState } from "react";
import { useConversationContext } from "../../utils/context/ConversationContext";
import { API_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const useSendMessage = () => {
    const [ loading, setLoading ] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversationContext();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(API_URL + "/message/send/" + selectedConversation._id, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
                body: JSON.stringify({ message })
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setMessages([...messages, data])
        } catch (error) {
            toast.error(error.message);
            console.log(error);
            
        } finally {
            setLoading(false);
        }
    }

    return { loading, sendMessage };
}

export default useSendMessage;