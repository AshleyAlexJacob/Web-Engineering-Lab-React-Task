const MyHeader = (props) => {
    return ( 
        <div>
            <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-between">
  <a className="navbar-brand" href="/">Auth.io</a>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className='nav-item'>
        <a className={ props.status===1?'nav-link active':'nav-link'} href="/login">Login <span className="sr-only"></span></a>
      </li>
      <li className='nav-item'>
        <a className={ props.status===2?'nav-link active':'nav-link'} href="/">Sign Up</a>
      </li>
     </ul>
  </div>
</nav>
            </header>
        </div>
     );
}
 
export default MyHeader;