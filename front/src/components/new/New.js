import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
            

function New(){

    const [name,setName] = useState("");
    const navigate = useNavigate();


    const handleNameChange = (e) =>{
        setName(
            e.target.value
        );
    }

    const handleClick = (e) =>{
        e.preventDefault();
        const data = axios.post('/ep',{name}).then(()=>{
            setName("");
        });
        const id = data.data
        navigate(`/booklist/${id}`);
    }




    return(
        <div>
        <ul>
            <li>
                <Link to='/'>Top</Link>
            </li>
            
        </ul>

        <form onSubmit={handleClick}>
                <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />

                <input type="submit" value="送信" />
        </form>
        </div>


    );
}


export default New;
            