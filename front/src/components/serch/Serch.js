
import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
// import got from 'got'; 
// import jsdom,{JSDOM} from 'jsdom'; 


function Serch () {
    const params = useParams();
    const [isbn, setIsbn] = useState('');
    const [id, setId] = useState('');
    
    useEffect(() => {
        setId(
            String(params.id)
        );
    }, [setId]);
    

    const handleNameChange = (e) =>{
        setIsbn(
            e.target.value
        );
        
        
    };


    const handleClick = (e) =>{
        
        e.preventDefault();
        axios.post(`/ep/serch`, {isbn, id}).then(() => {
            setIsbn("");
        });
    }


    return(
        <div>
            <h1>{id}</h1>
            <form onSubmit={handleClick}>
                <input type="text" value={isbn} onChange={handleNameChange} />

                <input type="submit" value="送信" />
            </form>
        </div>
    )

}

export default Serch;