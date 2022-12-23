import React,{useState, useEffect} from 'react';
//import axios from 'axios';

function Top() {



    const [messages,setMessages] = useState([]);
    useEffect(() => {
        fetch('/testenpo')
        .then((res) => res.json())
        .then((data) => setMessages(data));
    },[]);

    return (
        <div className="App">
            <h1>Front End</h1>
    
            {messages.map((message) => {
                return(<p>name : {message}</p>)
            })}
            
        </div>
    );

}


export default Top;