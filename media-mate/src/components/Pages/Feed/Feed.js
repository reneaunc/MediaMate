import React, {useState, useEffect} from "react";
import styles from './Feed.module.css';
import Post from "../Post/Post";
import allUsers from "../../../util/getAllUsers";
import allMedias from "../../../util/getAllMedias";


function Feed(props) {
    const [users, setUsers] = useState([]);
    const [medias, setMedias] = useState([]);
    useEffect(() => {
        allUsers.getAllUsers().then((users) => setUsers(users));
        allMedias.getAllMedias().then((medias) => setMedias(medias));
    }, [])
    
    //console.log(props);
    return (
        <>
        <h1>Feed</h1>
        <div>
            {users.map((user) => <p> {user.id.toString()} & {user.username} & {user.email}</p>)}
        </div>
        <div>
            {medias.map((media) => <p> {media.id.toString()} & {media.title} & {media.releaseYear}</p>)}
        </div>
        <div className={styles.feedArea}>
            {props.posts.map((cur)=> {
                return <Post curPost={cur} />
            })}
        </div>

        </>
    )
}

export default Feed;