
import './Searchbar.css';

import { useState } from 'react';


function SearchBar(props) {
  const selections = ['Movie', 'Game', 'Book'];

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
    const submitSearch = (e) =>{
      e.preventDefault();
      props.search(searchTerm, mediaSelection)
    }
    
    
    
    return (
      <div className="Search">
        
        <input className='inputBox' placeholder='Search Title...'onChange={handleChange} value={searchTerm}></input>
        <input className='searchButton'onClick={submitSearch} type="submit"value='Search!'></input><br/>
        {selections.map(cur => {
          return <button  value={cur.toLocaleLowerCase()} className={mediaSelection===cur.toLocaleLowerCase()?'active-button searchSelector': 'searchSelector'} onClick={handleMedia}>{cur}</button>
        })}
        
        
        
        {/* <input onClick={submitSearch} type="submit"></input>
          <ul>
          {mediaResult.map(curData => {
            return <li>{curData}</li>
          })}
          </ul> */}
      </div>
    );
}

export default SearchBar;