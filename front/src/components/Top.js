import React,{useState, useEffect} from 'react';
//import axios from 'axios';

function Top() {



    const [messages,setMessages] = useState([]);
    useEffect(() => {
        fetch('/testenpo')
        .then((res) => res.json())
        .then((data) => setMessages(data));
    },[]);

    const handleClick = async () =>{
        await fetch("/testenpo", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: "test000"}),
        })
    }; 

    return (
        <div>
            <h1>Front End</h1>
    
            {messages.map((message, index) => {
                return(<p key={index}>name : {message}</p>);
            })}
            
            {/* <form onSubmit={handleSubmit}>
                <textarea />
                <input type="submit" value="送信'" />
            </form> */}

            <button onClick={handleClick}>post</button>

        </div>
    );

}


export default Top;