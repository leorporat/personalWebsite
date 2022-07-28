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

function App() {
  return (
    <div className="header">
      
      <div className="parent">
        <div className="headerTab" id="poop">
          <h1>Leor Porat</h1>
        </div>
        <div className="headerTab">
          <h1>About</h1>
        </div>
        <div className="headerTab">
          <h1>Research</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
