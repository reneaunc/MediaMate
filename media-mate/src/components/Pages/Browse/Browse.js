import MediaCard from "../MediaCard/MediaCard";
import styles from './Browse.module.css'
import SearchBar from "../../Searchbar/Searchbar";

function Browse(props) {
    console.log(props);
    return (
        <>
        <h1>Browse</h1>
        <SearchBar />
        <div className={styles.browseArea}>
            {props.cards.map((cur)=> {
                return <MediaCard curMedia={cur} />
            })}
        </div>

        </>
    )
}

export default Browse;