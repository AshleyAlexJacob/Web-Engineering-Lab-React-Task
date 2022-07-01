import MyHeader from './header.jsx';

const Home = () => {
    return ( 
        <div>
             <MyHeader status=''/>

            <center className='m-5'>
        <div className="display-1 ">
        Welcome to Auth.io
      
       </div>
       <br />
       <div className="row g-0">
        <div className="col align-self-center m-0">
     
                <a href="/login" className="btn btn-dark px-5 py-2">Login</a>

     
       
        </div>
        <div className="col align-self-center m-0">
     
        <a href="/signup" className="btn btn-dark px-5 py-2">Sign Up</a>

     
        </div>
         

        

       </div>
      
            </center>

         </div>
     );
}
 
export default Home;