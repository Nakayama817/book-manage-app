import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
            

function New(){

    const [name,setName] = useState("");


    const handleNameChange = (e) =>{
        setName(
            e.target.value
        );
    }

    const handleClick = (e) =>{
        e.preventDefault();
        axios.post('/ep',{name}).then(()=>{
            setName("");
        });
    }




    return(
        <div>
        <ul>
            <li>
                <Link to='/'>Top</Link>
            </li>
            <li>
                <Link to='/list'>List</Link>
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
            