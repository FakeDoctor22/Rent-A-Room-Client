import { useEffect } from "react";
import chatService from "../../services/chatService";
import { FaTrash,FaEdit } from "react-icons/fa";

function ChatList({ chats, setChats }) {
  useEffect(() => {
    chatService.getChats()
      .then((response) => {
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
  };

  return (
    <div className="bg-orange-500 w-64">
    <ul className="flex flex-col gap-2">
      {chats.map((chat) => (
        <li key={chat.id} className="flex gap-4 items-center text-white">➤ <FaEdit /> {chat.message} <FaTrash onClick={() => deleteChat(chat.id)} /></li>
      ))}
    </ul>
    </div>
  );
}

export default ChatList;
