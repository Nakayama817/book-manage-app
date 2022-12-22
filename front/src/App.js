import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [message,setMessage] = useState('');
  useEffect(() => {
    fetch('/enpo')
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  },[]);

  return (
    <div className="App">
      <h1>Front End</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
