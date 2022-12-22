import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [messages,setMessages] = useState([]);
  useEffect(() => {
    fetch('/enpo')
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

export default App;
