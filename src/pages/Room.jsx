import React from 'react'
import ChatForm from './components/ChatForm'
import ChatList  from './components/ChatList'
import { useState } from 'react'


function Room() {
  const [chats, setChats] = useState([])

  return (
    <>
      <h1>My Room</h1>
      <h4>Status:</h4>
      <button>Rented by you</button>

      <h3>Chat with owner</h3>
      <ChatList chats={chats} setChats={setChats} />
      <ChatForm chats={chats} setChats={setChats} />
    </>
  )
}

export default Room