import React,{useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './blist.scss'

function Booklist(){
    const params = useParams();
    const [datas,setDatas] = useState([]);
    const id = String(params.id);
    const navigate = useNavigate();


    const getBooks = async () => {
            const response = await axios.get(`/ep/book/${id}`);
            setDatas(response.data);
        }

        useEffect(() => {
            getBooks();
        }, []);


    const delBook = (did) =>{
        axios.delete(`/ep/book/del/${did}`);
        navigate(`/booklist/${id}`);
    }
    


    return (
        <div>

            

            <ul>
                <li>{params.id}'s Bookd!!</li>
                <li>
                    <Link to='/'>Select User</Link>
                </li>
                <li>
                    <Link to='/new'>New</Link>
                </li>
                <li>
                    <Link to={`/serch/${id}`}>Save New Book!!</Link>
                </li>
            </ul>
            <p>Book List</p>
            <table>
                <tr>
                    <th><i>Title</i></th>
                    <th><i>Author</i></th>
                    <th></th>
                    
                </tr>
                {datas.map((book, index) => {
                    return(
                    
                            <tr key={book.id}>
                                <td>{book.title}</td> 
                                <td>{book.author}</td>
                                <td><button onClick={() => delBook(book.id)}>Delete</button></td>
                            </tr>
                        
                    );
                })}
            </table>
        

        </div>
        
    );

}

export default Booklist;