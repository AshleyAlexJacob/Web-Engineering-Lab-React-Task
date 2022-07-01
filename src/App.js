
import Login from './components/login.jsx';
import Home from './components/home';

import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import SignUp from './components/sign_up.jsx';
function App() {


   
  return (
    <div className="App">
          <Routes>      
          <Route path='/' element={<Home/>} />
                    
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
      
          </Routes>
      
     
    </div>
  );
}

export default App;
