function Navbar() {
    return (
        /*
        <html>
          <header>
            
            <nav>
              <div className="headerTab" id="poop">
                <h1><strong>Leor<br></br>Porat</strong></h1>
              </div>
              <div className="headerTab">
                <p>About</p>
              </div>
              <div className="headerTab">
                <p>Research</p>
              </div>
              <div className="headerTab">
                <p>Education</p>
              </div>
              <div className="headerTab">
                <p>Personal</p>
              </div>
              <div className="headerTab">
                <p>Projects</p>
              </div>
            </nav>
          </header>
          <body>
            <h1>Hey, I'm Leor. I'm: </h1>
            <ul className="aboutList">
              <li>An incoming freshman at the University of Minnesota</li>
            </ul>
            
          </body>
        </html>
        */
        <div className='nav-parent'>
            <nav>
                <a href="/" className="site-title"> Leor Porat</a>
                <ul>
                    <li className='active'>
                        <a href="/education">Education</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/personal">Personal</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;