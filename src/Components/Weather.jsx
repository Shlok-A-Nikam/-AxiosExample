import React, { useEffect } from 'react'
import axios from 'axios';

const Weather = () => {

  useEffect(() => {
   fetchdata();
  }, [])
  

  const fetchdata =  async() => {
    const options = {
      method: 'GET',
      url: 'https://open-weather13.p.rapidapi.com/city/pune/In',
      headers: {
        'x-rapidapi-key': '511fdf1288msh7429da2d9d56705p101377jsnaac92f617a84',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return ( 
    <div>
      Weate
    </div>
  )
}

export default Weather
 