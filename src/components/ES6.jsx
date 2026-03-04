import React, { useEffect, useRef, useState } from 'react'

const ES6 = () => {
    const [input,setInput] = useState('');
    const inputRef = useRef(null);
    const arr = ["Apple","banana","carrot"];

    const users = [
        {
            name:"Shubham",
            age: 22
        },
        {
            name:"Yash",
            age: 17
        },
        {
            name:"Omkar",
            age: 36
        }
    ];
    const [a,,b] = arr;
    // filter users
    const filteredUsers =  users.filter((user)=> user.age>18);
    //focus input when page first time loads
    useEffect(()=>{
        inputRef.current.focus();
    },[]);
  return (
    <>
    <h1>ES6 Practice</h1>

        <input ref={inputRef} type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <h2>Destructuring example</h2>
        <ul>
            <li>{a}</li>
            <li>{b}</li>
        </ul>
    {/* array map filter reduce */}
        <h2>Using Array.map function</h2>
        <ul>
            {
                arr.map((item,i)=>{
                    return <li key={`${item+i}`}>{item}</li>
                })
            }
        </ul>

         <h2> Before Using Array.filter function</h2>
        <ul>
            {
                users.map((item,i)=>{
                    return <li key={`${item.name+i}`}>{item.name}</li>
                })
            }
        </ul>

         <h2> After Using Array.filter function</h2>
        <ul>
            {
               filteredUsers.map((item,i)=>{
                    return <li key={`${item.name+i}`}>{item.name}</li>
                })
            }
        </ul>
    </>
  )
}

export default ES6