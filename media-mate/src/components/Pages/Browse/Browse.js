import MediaCard from "../MediaCard/MediaCard";
import styles from './Browse.module.css'
import SearchBar from "../../Searchbar/Searchbar";
import React, { useState } from "react";
import Movies from "../../../util/Movies"
import Books from "../../../util/Books";
import Games from "../../../util/Games";

function Browse(props) {
    console.log(props);
    const [mediaResult, handleMediaResult] = useState([]);

    const handleSubmit = async (term, mediaSelection)=> {
    
        if(mediaSelection==="movie"){
          Movies.searchMovie(term)
            .then(result => handleMediaResult(result))
    
        }else if(mediaSelection==="book"){
          Books.getBook(term)
            .then(result => handleMediaResult(result))
    
        } else if (mediaSelection==="game"){
          Games.getGame(term)
            .then( result => handleMediaResult(result))
    
        } else {
          console.log("error")
        }
      }

    return (
        <>
        <h1>Browse</h1>
        <SearchBar search = {handleSubmit} />
        <div className={styles.browseArea}>

            {mediaResult.map((cur)=> {
                return <MediaCard key={cur.id} curMedia={cur} />
            })}
        </div>

        </>
    )
}

export default Browse;