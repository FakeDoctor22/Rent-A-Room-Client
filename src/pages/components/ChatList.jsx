import { useEffect } from "react"
import chatService from "../../services/chatService";
import { FaTrash } from "react-icons/fa6";

function ChatList({ chats, setChats }) {
  useEffect(() => {
    chatService.getChats().then((response) => {
        setChats(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteChat = (id) => {
    chatService
      .deleteChat(id)
      .then((_response) => {
        setChats(chats.filter((chat) => chat.id !== id));
      })
      .catch((error) => console.log(error));
  }

  return (
    <ul>
      {chats.map((chats) => (
        <li key={chats.id}>➤ {chats.message} <FaTrash onClick={() => deleteChat(chats.id)} /></li>
      ))}
    </ul>
  )
}

export default ChatList