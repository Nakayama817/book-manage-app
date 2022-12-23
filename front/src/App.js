
import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Top from './components/Top';
import About from './components/About';
//import axios from 'axios';

function App() {

    return (
      <div>
        <BrowserRouter>
        <ul>
            <li>
              <Link to='/'>top</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
        </ul>

        <Routes>
            <Route path='/' element={<Top/>} />
            <Route path='/About' element={<About/>} />
        </Routes>
        </BrowserRouter>
        
      </div>
    );
  }


export default App;
