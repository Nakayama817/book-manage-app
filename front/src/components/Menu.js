import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function Menu() {


    const [userid,setUserid] = useState(0);
    const [cuserid,setCuserid] = useState(0);

    let menu;
    

    const [datas,setDatas] = useState([]);
    



    // const getCurrentuser = async () => {
    //     const response = await axios.get('/ep/currentuser');
    //     setCuserid(response.data);
    // }


    const getUsers = async () => {
            const response = await axios.get('/ep');
            setDatas(response.data);
        }

    // useEffect(() => {
        // getCurrentuser();
    // }, []);

    useEffect(() => {
        getUsers();
    }, []);


    const handleSubmit = ()=>{
        if(userid !== 0){
            setCuserid(
                userid
            );
            // axios.post('/ep/currentuser',{userid});
        }

    }

    const handleChange = (e)=>{
        setUserid(
            e.target.value
        );
    }
    
    
    
    
    if(cuserid === 0){
        menu = (
        <div>    
        <h1>select user</h1>

        <form onSubmit={handleSubmit}>
            <select onChange={handleChange}>
                <option value={0}>---</option>
                {datas.map((user, index) => {
                    return(
                    
                        <option value={user.id} key={user.id}>{user.name}</option>
                        
                    );
                })}
            </select>
            <input type="submit" />
        </form>

        
        </div>
        
        );
            
    
        
    }else{
        menu = (
        <div>
            <ul>
                <li>
                    <Link to={'/list/' + cuserid}>List</Link>
                </li>
                <li>
                    <Link to='/new'>New</Link>
                </li>
            </ul>
            <h1>Welcome! {cuserid}</h1>
        </div>
        );
    }



    return (
        <div>
        
        {menu}
            
        </div>
        
    );

}

export default  Menu;