import React from "react";
import styles from './Feed.module.css';
import Post from "../Post/Post";

function Feed(props) {
    console.log(props);
    return (
        <>
        <h1>Feed</h1>
        <div className={styles.feedArea}>
            {props.posts.map((cur)=> {
                return <Post curPost={cur} />
            })}
        </div>
        
        </>
    )
}

export default Feed;