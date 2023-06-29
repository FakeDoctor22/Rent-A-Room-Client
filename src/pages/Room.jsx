import React from 'react'
import ChatForm from './components/ChatForm'
import ChatList  from './components/ChatList'
import { useState } from 'react'


function Room() {
  const [chats, setChats] = useState([])

  return (
    <div className='flex flex-col gap-4 items-center'>
      <h1 className='text-2xl font-bold'>My Room</h1>
      <h4>Status:</h4>
      <button className='bg-orange-500 text-white block w-40 rounded-full'>Rented by you</button>

      <h3 className='font-bold'>Chat with owner</h3>
      <ChatList chats={chats} setChats={setChats} />
      <ChatForm chats={chats} setChats={setChats} />
    </div>
  )
}

export default Room