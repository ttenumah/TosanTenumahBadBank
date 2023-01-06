function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <Link to="/" className="navbar-brand">Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
                <Link to="/CreateAccount" className="nav-link">Create Account</Link>
          </li>
          <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
                <Link to="/deposit" className="nav-link">Deposit</Link>
          </li>
          <li className="nav-item">
                <Link to="/withdraw" className="nav-link">Withdraw</Link>
          </li>
          <li className="nav-item">
                <Link to="/alldata" className="nav-link">AllData</Link>
          </li>         
        </ul>
      </div>
    </nav>
    </>
  );
}