
import Login from './components/login.jsx';
import Home from './components/home';

// import MyHeader from './components/header.jsx';
import React from 'react';
import { Routes ,Route } from 'react-router-dom';
function App() {

  // const [name,setName] = useState('Ashley');
  // const [users,setUsers] = useState([]);

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response)=>{
  //     if(!response.ok){
  //         console.log('Error');
  //     }
  //    return response.json()
  //   })
  //   .then((data)=>setUsers(data))
  //   .catch((err) => {
  //     console.log(err.message);
  //   });
  // },[]);
  // const changeName = ()=>{
  //   if(name==='Ashley') setName('ShahRaaza');
  //   if(name==='ShahRaaza') setName('Ashley');
   
  // };
  return (
    <div className="App">
          <Routes>      
          <Route path='/' element={<Home/>} />
                    
          <Route path='/login' element={<Login/>} />
          </Routes>
      {/* <MyHeader/> */}

      {/* <h1>
        Users: {users.length}
      </h1> */}
      {/* <div>
    {  users.map((user,index) => <h4 key={index}>{user.name}</h4>)}
     
        </div> */}
      {/* <button onClick={changeName}>
Change
      </button> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
