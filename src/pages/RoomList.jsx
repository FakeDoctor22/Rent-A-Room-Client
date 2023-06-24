import React from 'react'
import { Link } from 'react-router-dom'

function RoomList() {
  return (
    <>
      <h1>Room List</h1>
      <ul>
        <li><Link to="/Room">My Room</Link></li>
        <li>Room #2</li>
        <li>Room #3</li>
        <li>Room #4</li>
      </ul>
    </>
  )
}

export default RoomList