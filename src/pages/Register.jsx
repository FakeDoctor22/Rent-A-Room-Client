import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      
    }

  return (
    <div className='bg-orange-50 h-screen flex flex-col items-center m-10'>
        <form onSubmit={handleLogin} className='w-64 flex flex-col gap-4'>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text" 
              placeholder='username' 
              name='username' 
              className='block w-full bg-orange-200'
            />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text" 
              placeholder='name' 
              name='name' 
              className='block w-full bg-orange-200'
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              name="password" 
              className='block w-full bg-orange-200'
            />
            <button className='bg-orange-500 text-white block w-full rounded-full'>Register</button>
            <h1>Already have an account? <Link to='/Login' className='text-blue-500'>Login</Link></h1>
        </form>
    </div>
  )
}   

export default Register