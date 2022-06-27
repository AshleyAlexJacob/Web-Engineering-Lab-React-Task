import React, { useState} from 'react';
import MyHeader from './header.jsx';


function Login() {
    const [user,setUser] = useState({
        'email':'',
        'password':'',
    });
    const handleChange = (updatedValue) => {
        setUser(user => ({
             ...user,
             ...updatedValue
           }));
         }
 const  handleLogin=(event)=>{

alert('Server');
alert('Email: '+user.email);
alert('Password: '+user.password);


}
    return ( 
        <div>
        <MyHeader status={1}/>
          <form onSubmit={e => {handleLogin(e)}}>
        <label>Email</label>
        <br />
        <input 
          name='email' 
          type='text' 
          defaultValue={user.email}
          onChange={(e) => handleChange({email:e.target.value})}
        />
        <br />
        <label>Password</label>
        <br />
        <input 
          name='password' 
          type='password' 
          defaultValue={user.password}
      
          onChange={(e) => handleChange({password:e.target.value})}
   
        />
        <br />
        <input 
          className='submitButton'
          type='submit' 
          value='log' 
        />
      </form>
        </div>
     );
}

export default Login;