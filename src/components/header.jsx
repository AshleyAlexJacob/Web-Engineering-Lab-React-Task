const MyHeader = () => {
    return ( 
        <div>
            <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-between">
  <a className="navbar-brand" href="/">Navbar</a>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Pricing</a>
      </li>
    </ul>
  </div>
</nav>
            </header>
        </div>
     );
}
 
export default MyHeader;