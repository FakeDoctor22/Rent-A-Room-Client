import { useState } from "react"
import chatService from "../../services/chatService";

function ChatForm({ chats, setChats }) {
  const [newChat, setNewChat] = useState("");

  const addChat = (e) => {
    e.preventDefault();

    const chatObject = {
      message: newChat,
    };

    chatService.createChat(chatObject).then((returnedChat) => {
      setChats(chats.concat(returnedChat));
      setNewChat("");
    })
    .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={addChat} className="flex gap-4 flex-col">
      <input type="text" placeholder="message" value={newChat} onChange={(e) => setNewChat(e.target.value)} className='block w-64 bg-orange-200 rounded-sm' />
      <button type="submit" className='bg-orange-500 text-white block w-64 rounded-full'>➤ Send</button>

    </form>
  )
}

export default ChatForm