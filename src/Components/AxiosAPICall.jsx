import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AxiosAPICall = () => {
    const [data, setData] =useState([]);
    const getDataOfBooks = async () => {
        const options = {
            method: 'GET',
            url: 'https://hapi-books.p.rapidapi.com/month/2024/3',
            headers: {
                'x-rapidapi-key': '511fdf1288msh7429da2d9d56705p101377jsnaac92f617a84',
                'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // `useEffect` should be at the top level of the component
    useEffect(() => {
         getDataOfBooks();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Title</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       data.map((book, index) =>(
                        <tr>
                            <td> {index + 1} </td>
                            <td> {book.name} </td>
                            <td>
                                <img src={book.cover} alt="" height={100} width={100}/>
                            </td>
                        </tr>
                       ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AxiosAPICall;


/**
 * 1)diff bet http and https

1)https is more sequre than http
2)http is faster than https
3)https uses certificate ssl(sequre socket layer) or tls(transport layer sequrity) encryption

2)HTTP methods : GET POST PATCH PUT DELETE OPTIONS

****diff bet GET VS POST

1)GET->Fetching of data  / Read data(when we have to take data from database)
POST-> insert data  (when we have to create data add data in database)
2)GET-> parameters show 
Post -> we use request.body

****HTTP Status****

 */