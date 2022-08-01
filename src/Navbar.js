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
                <a href="/" className="site-title">Leor Porat</a>
                <ul>
                    <SetActiveRoute href="/education">Education</SetActiveRoute>
                    <SetActiveRoute href="/projects">Projects</SetActiveRoute>
                    <SetActiveRoute href="/personal">Personal</SetActiveRoute>
                </ul>
            </nav>
        </div>
    )
}

function SetActiveRoute({ href, children, ...props }) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    );
    
}

export default Navbar;