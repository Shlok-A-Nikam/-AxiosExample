import React, { useState } from 'react'

    const Signin = () => {
        const[email, setEmail] = useState("")
        const[password, setPassword] = useState("")
        const [confirmPassword, setConfirmPassword] = useState("")
        
        const formHandler = async (e) => {
            e.preventDefault();
    
    
        }
  return (
   
      <div>
        <h1>Signin</h1>
        <form onSubmit={formHandler}>
            <label htmlfor="">Enter Email::</label>
            <input type='text' placeholder='abc@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <br />
            <br />
            <label htmlfor="">Enter Password::</label>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <br />
            <br />
           
            <button type='submit'  className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Signup</button> 

        </form>
 
    </div>
  )
}

export default Signin
