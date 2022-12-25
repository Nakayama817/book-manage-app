
import React,{useState, /*useEffect*/} from 'react';
// import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
// import got from 'got'; 
// import jsdom,{JSDOM} from 'jsdom'; 


function Serch () {
    const [isbn, setIsbn] = useState('');

    const handleNameChange = (e) =>{
        setIsbn(
            e.target.value
        );
    }

    const handleClick = (() =>{
        
        axios.post('/ep/serch',{isbn}).then(()=>{
            
        });
    })


    return(
        <div>
            <form onSubmit={handleClick}>
                <input type="text" name="isbn" value={isbn} onChange={handleNameChange} />

                <input type="submit" value="送信" />
            </form>
        </div>
    )

}

export default Serch;