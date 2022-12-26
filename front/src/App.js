
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import New from './components/new/New';
import List from './components/index/List';
import Menu from './components/Menu';
import Serch from './components/serch/Serch'
//import axios from 'axios';

function App() {


    return (
      <div>
        <BrowserRouter>
        

        <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/list/:id' element={<List />} />
            <Route path='/new' element={<New />} />
            <Route path='/serch/:id' element={<Serch />} />
        </Routes>
        </BrowserRouter>
        
      </div>
    );
  }


export default App;
