import './App.css';

import Movies from './util/Movies';
import Games from './util/Games';
import Books from './util/Books';
import { useState } from 'react';



function App() {

  const [searchTerm, handleSearchTerm] = useState("");
  const [mediaSelection, handleMediaSelection] = useState('movie')

  const handleChange = (e) =>{
    e.preventDefault();
    handleSearchTerm(e.target.value)
  }

  const handleMedia = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    handleMediaSelection(e.target.value);
  }
  
  const handleSubmit = async (e)=> {
    e.preventDefault();
    console.log(`submitted searchterm: ${searchTerm}, media Type:${mediaSelection}`);
    if(mediaSelection==="movie"){
      Movies.searchMovie(searchTerm)
        .then(result => console.log(result))

    }else if(mediaSelection==="book"){
      Books.getBook(searchTerm)
        .then(result => console.log(result))

    } else if (mediaSelection==="game"){
      Games.getGame(searchTerm)
        .then( result => console.log(result))

    } else {
      console.log("error")
    }
  }
  
  return (
    <div className="App">
      
      <input placeholder='Search Title...'onChange={handleChange} value={searchTerm}></input><br/>
      <button value="movie" onClick={handleMedia}>Movie</button><br/>
      <button value="game" onClick={handleMedia}>Game</button><br/>
      <button value="book" onClick={handleMedia}>Book</button><br/>
      
      <input onClick={handleSubmit} type="submit"></input>

        {/*<button onClick={movies.searchMovie("shrek")}>hello</button>*/}
        {/*<button onClick={books.getBook('harry potter')}>hello</button>*/}
        {/*<button onClick={games.getGame('hogwarts')}>hello</button>*/}

    </div>
  );
}

export default App;
