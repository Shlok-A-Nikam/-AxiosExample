import React, { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContextProvider';

const SinglePost = () => {
    const login = useContext(LoginContext);
    console.log(login);
  return (
    <div>SinglePost</div>
  )
}

export default SinglePost

/**
 * Hooks: to treat the functional component as a class component
 * 1) useState: 
 * 2) useEffect: mounting, updating and unmounting
 * 3) useContext: to manage the global state of application
 *  Services, Themes, user settings, global state
 *  Steps:
 *  1) create Context
 *  2) provider
 *  3) consumer
 * 
 * 4) UseRef: change Element
 * variable -> mutable -> render count 
 * 
 
 */