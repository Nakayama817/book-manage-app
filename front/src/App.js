
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import New from './components/new/New';
import List from './components/index/List';
import Menu from './components/Menu';
//import axios from 'axios';

function App() {


    return (
      <div>
        <BrowserRouter>
        

        <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/list/:id' element={<List />} />
            <Route path='/new' element={<New />} />
        </Routes>
        </BrowserRouter>
        
      </div>
    );
  }


export default App;
