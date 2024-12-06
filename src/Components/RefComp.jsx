import React, { useEffect, useRef, useState } from 'react'
/**
 * use Ref: allows us to access Dom Elements
 *  For creating mutable variables which will not re-render the component
 */

const RefComp = () => {
    const [name, setName] = useState("");
    const count = useRef(0);
    const inputEle = useRef();

    console.log(count.current);

    const handleClick = () => {
        inputEle.current.style.width = "300px";
        inputEle.current.focus();
    }
    useEffect(() => {
       count.current = count.current + 1;
    })

  return (
    <div>
        <input type="text" placeholder='Enter your name' 
        onChange={(e) => setName(e.target.value)}/>
        <h3> Render Count : {count.current}</h3>
        <br /> <br /> 

        <input type="text" ref={inputEle}  />
        <button onClick={handleClick}> Click me </button>

    </div>
  )
}

export default RefComp