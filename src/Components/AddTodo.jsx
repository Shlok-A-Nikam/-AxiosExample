import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const addFormHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

  return (
   <>
    <form onSubmit={addFormHandler}>
        <input type="text" placeholder='Enter Text' value={input} 
        onChange={(e) => setInput(e.target.value)}
        />
        <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'> Submit </button>
    </form>
   </>
  )
}

export default AddTodo