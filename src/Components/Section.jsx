import React, { useEffect, useState } from 'react'

const Section = () => {
  const [inputValue, setInputValue] = useState(0);
  console.log(inputValue);
  const increment = () => {
    setInputValue(inputValue + 1);
  }

  const decrement = () => {
    setInputValue(inputValue - 1);
   } 

  //  Mouting
  // useEffect(() => {
  //   console.log("Mounting");
  // }, [])

  // Updating
  // useEffect(() => {
  //   console.log("Updating");
  // }, [inputValue]);

  // unmouting
  useEffect(() => {
    // HOF => Higher Order function
    return () => {
      console.log("Unmouting");
    }
  }, [])

  return (
   <>
   <div style={
    {
      backgroundColor: "yellow"
    }
   }> UseState Example </div>
    <input type="number" placeholder='Write Something' className='border' value={inputValue} readOnly
    />
    <button className='bg-blue-700 hover:bg-blue-800 text-center me-2 mb-2 px-3 text-white'
    onClick={increment}>
      + 
    </button>
    <button className='bg-blue-700 hover:bg-blue-800 text-center me-2 mb-2 px-3 text-white'
    onClick={decrement}
    >
       - 
    </button>
    </>
  )
}

export default Section