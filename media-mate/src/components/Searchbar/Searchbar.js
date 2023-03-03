import Movies from "../../util/Movies";
import Books from "../../util/Books";
import Games from "../../util/Games";

import { useState } from 'react';


function SearchBar(props) {

    const [searchTerm, handleSearchTerm] = useState("");
    const [mediaSelection, handleMediaSelection] = useState('movie')
    const [mediaResult, handleMediaResult] = useState([]);
  
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
  
      if(mediaSelection==="movie"){
        Movies.searchMovie(searchTerm)
          .then(result => handleMediaResult(result))
  
      }else if(mediaSelection==="book"){
        Books.getBook(searchTerm)
          .then(result => handleMediaResult(result))
  
      } else if (mediaSelection==="game"){
        Games.getGame(searchTerm)
          .then( result => handleMediaResult(result))
  
      } else {
        console.log("error")
      }
    }
    
    return (
      <div className="Search">
        
        <input placeholder='Search Title...'onChange={handleChange} value={searchTerm}></input><br/>
        <button value="movie" onClick={handleMedia}>Movie</button><br/>
        <button value="game" onClick={handleMedia}>Game</button><br/>
        <button value="book" onClick={handleMedia}>Book</button><br/>
        
        <input onClick={handleSubmit} type="submit"></input>
          <ul>
          {mediaResult.map(curData => {
            return <li>{curData.title}</li>
          })}
          </ul>
      </div>
    );
}

export default SearchBar;