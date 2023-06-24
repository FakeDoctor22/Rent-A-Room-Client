import React from 'react'
import { useState } from 'react'

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
  return (
    <>
        <form>
            <input type="text" placeholder='username' name='username' />
            <input type="text" placeholder='password' name='password' />
            <button>Register</button>
        </form>
    </>
  )
}   

export default Register