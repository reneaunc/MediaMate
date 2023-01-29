import React from "react";
import './Feed.module.css';
import Post from "../Post/Post";

function Feed(props) {
    console.log(props);
    return (
        <>
        <h1>Feed</h1>
        {props.posts.map((cur)=> {
            return <Post curPost={cur} />
        })}
        
        </>
    )
}

export default Feed;