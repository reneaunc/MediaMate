import React, {useState, useEffect} from "react";
import styles from './Feed.module.css';
import Post from "../Post/Post";
import allUsers from "../../../util/getAllUsers";
import allMedias from "../../../util/getAllMedias";
import oneMedia from "../../../util/getOneMedia";


function Feed(props) {
    const [users, setUsers] = useState([]);
    const [medias, setMedias] = useState([]);
    const [media, setMedia] = useState([]);
    useEffect(() => {
        allUsers.getAllUsers().then((users) => setUsers(users));
        allMedias.getAllMedias().then((medias) => setMedias(medias));
        oneMedia.getMediaByTitle("Shrek").then((media) => setMedia(media));
    }, [])
    
    
    //console.log(props);
    return (
        <>
        <h1>Feed</h1>
        {/* <div>
            <p>{`${media.id}`} & {`${media.title}`}</p>
        </div> */}
        {/* <div>
            {users.map((user) => <p> {user.id} & {user.username} & {user.email}</p>)}
        </div>
        <div>
            {medias.map((media) => <p> {media.id} & {media.title} & {media.releaseYear}</p>)}
        </div> */}
        <div className={styles.feedArea}>
            {props.posts.map((cur)=> {
                return <Post curPost={cur} />
            })}
        </div>

        </>
    )
}

export default Feed;