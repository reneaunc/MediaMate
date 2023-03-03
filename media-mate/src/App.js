import logo from './logo.svg';
import './App.css';

import Movies from './util/Movies';
import Games from './util/Games';
import Books from './util/Books';



function App() {

  const movies =  new Movies();
  const games = new Games();
  const books = new Books();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
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
        {/*<button onClick={movies.searchMovie("shrek")}>hello</button>*/}
        <button onClick={books.getBook('harry potter')}>hello</button>
      </header>
    </div>
  );
}

export default App;
