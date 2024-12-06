import React, { useReducer } from 'react'

const initialState = { count: 0 };

const ReducerEx = () => {
    const reducer = (state, action) => {
        switch(action.type) {
            case "increased":
                return {count: state.count + 1};
            case "decreased":
                return {count: state.count - 1};
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const increased = () => {
      dispatch({type: "increased"});
    }

    const decreased = () => {
       dispatch({type: "decreased"});
    }
  return (
    <>
    <label htmlFor=""> {state.count}</label> <br/>
    <button onClick={increased}
    className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'> increase </button>
    <button onClick={decreased}
    className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'> decrease </button>
    </>
  )
}

export default ReducerEx

/**
 * useReducer: 1)Global State management in React Application
 * 
 * 
 */