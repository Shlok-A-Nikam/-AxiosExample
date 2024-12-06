import React, { useEffect, useState } from 'react'

const APICall = () => {
    const [data, setData] =useState([]);


// UI render =>Synchronus
useEffect(() => {
    getpost();
}, [ ])


//Async
const getpost = async () => {
    try {
        const reasult = await fetch("https://jsonplaceholder.typicode.com/posts")
        const actualData = await reasult.json();
        setData(actualData);
    } catch (error) {
        console.log(error);
    }
}
return (
    <div> 
        <table>
            <thead>
                <tr>
                    <th>User id </th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th> 
                </tr>
            </thead>
            <tbody>
                {
                    data.map((post) => (
                        <tr>
                            <td>{post.userId} </td>
                            <td>{post.id} </td>
                            <td>{post.title} </td>
                            <td>{post.body} </td>
                        </tr>

                    ))
                }
            </tbody>
        </table>
    </div>
)
}

export default APICall
