import React,{useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function List(){
    const params = useParams();
    const [datas,setDatas] = useState([]);


    const getUsers = async () => {
            const response = await axios.get('/ep');
            setDatas(response.data);
        }

        useEffect(() => {
            getUsers();
        }, []);


    const delUser = (id) =>{
        axios.delete(`/ep/del/${id}`);
    }
    


    return (
        <div>

            <h1>{params.id}'s Page!!</h1>

            <ul>
                <li>
                    <Link to='/'>Top</Link>
                </li>
                <li>
                    <Link to='/new'>New</Link>
                </li>
            </ul>


            {datas.map((user, index) => {
                return(
                <p key={user.id}>
                    name : {user.name}
                    <button onClick={() => delUser(user.id)}>Delete</button>
                    
                    
                </p>
                );
            })}
            
        

        </div>
        
    );

}

export default List;