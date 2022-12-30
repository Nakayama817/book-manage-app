
import React,{useState, /*useEffect*/} from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
// import got from 'got'; 
// import jsdom,{JSDOM} from 'jsdom'; 


function Serch () {
    const params = useParams();
    const [isbn, setIsbn] = useState('');
    const id = String(params.id);
    const navigate = useNavigate();
    
    
    

    const handleNameChange = (e) =>{
        setIsbn(
            e.target.value
        );
        
        
    };


    const handleClick = (e) =>{
        
        e.preventDefault();
        axios.post(`/ep/serch`, {isbn, id});
        navigate(`/booklist/${id}`);
        
        
    }


    return(
        <div>
            <ul>
                <li>{params.id}'s Books!!</li>
                <li>
                    <Link to='/'>Select User</Link>
                </li>
                <li>
                    <Link to={`/booklist/${id}`}>Booklist</Link>
                </li>
            </ul>
            
            <h2>Enter ISBN code</h2>
            <form onSubmit={handleClick}>
                <input type="text" value={isbn} onChange={handleNameChange} />

                <input type="submit" value="送信" />
            </form>

            
        </div>
    );

}

export default Serch;