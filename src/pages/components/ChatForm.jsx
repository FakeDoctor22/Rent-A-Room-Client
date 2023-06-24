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
    <form onSubmit={addChat}>
      <input type="text" placeholder="message" value={newChat} onChange={(e) => setNewChat(e.target.value)} />
      <button type="submit">➤ Send</button>

    </form>
  )
}

export default ChatForm