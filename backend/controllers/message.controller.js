import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id : receiverId } = req.params;
        const senderId = req.user._id; 
        
        let conversation = await Conversation.findOne({ participants: { $all: [ senderId, receiverId ] } });
        if (!conversation) {
            conversation = new Conversation({
                participants: [ senderId, receiverId ],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // SOCKET IO FUNCTIONALITY WILL GO HERE

        // this will run one by one
        // await conversation.save();
        // await newMessage.save();

        // this will run in parallel
        await Promise.all([ conversation.save(), newMessage.save() ])

        return res.status(201).json({ newMessage });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id : userToChatId } = req.params;
        const senderId = req.user._id; 
        
        const conversation = await Conversation.findOne({ 
            participants: { $all: [ senderId, userToChatId ] } 
        }).populate("messages"); // NOT REFERENCE BUT THE ACTUAL MESSAGES.
        if (!conversation) {
            return res.status(200).json([]);
        }

        return res.status(200).json({ messages: conversation.messages });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}