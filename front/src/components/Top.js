import React,{useState, /*useEffect*/} from 'react';
//import axios from 'axios';

function Top() {



    const [messages,setMessages] = useState([]);
    const [name,setName] = useState('');
    // useEffect(() => {
    //     fetch('/testenpo')
    //     .then((res) => res.json())
    //     .then((data) => setMessages(data));
    // },[]);

    async function getUser() {
        const res = await fetch('/testenpo');
        const data = await res.json();
        return data;
        
    }
    getUser()
        .then(data => {
            setMessages(data);
        })
        .catch(err => {
            console.log(err);
        })

    // const handleClick = async () =>{
    //     await fetch("/testenpo", {
    //         method: "POST",
    //         mode: "cors",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({name: "test000"}),
    //     })
    // }; 

    const handleNameChange = (e) =>{
        setName(
            e.target.value
        );
    }

    const handleNamedelete = (e) =>{
        setName(
            e.target.value
        );
    }

    

    const handleClick = async (e) =>{
        e.preventDefault();
        await fetch("/testenpo", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: name}),
        });
        // const refreshPage = ()=>{
        //     window.location.reload();
        // }
    }

    const handleDelete = async (e) =>{
        e.preventDefault();
        await fetch("/testenpodel", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: name}),
        });
    }



    return (
        <div>
            <h1>Front End</h1>

            
    
            {messages.map((message, index) => {
                return(
                <p key={index}>
                    name : {message}
                    <form onSubmit={handleDelete}><input type="submit" value={message} /></form>
                    
                    
                </p>
                );
            })}
            
            <form onSubmit={handleClick}>
                <input value={name} onChange={handleNameChange} />

                <input type="submit" value="送信" />
            </form>

            {/* <button onClick={handleClick}>post</button> */}
        </div>
        
    );

}


export default Top;