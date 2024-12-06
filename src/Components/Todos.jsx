import React from 'react'
import AddTodo from './AddTodo'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    
  return (
   <>
    <h3> Todo List With Redux Toolkit </h3> 
    <AddTodo />

    <h5> Todo List </h5>
    <ul>
        {
            todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    onClick={() => dispatch(removeTodo(todo.id))}
                    > 
                    delete 
                    </button>
                </li>
            ))
        }
    </ul>
   </>
  )
}

export default Todos