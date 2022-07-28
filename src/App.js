import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}
*/

function Header() {
  return (
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
  );
}

export default Header;
