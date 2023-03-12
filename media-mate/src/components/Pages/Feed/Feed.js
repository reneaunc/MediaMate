import React, {useState, useEffect} from "react";
import styles from './Feed.module.css';
import Post from "../Post/Post";
import allUsers from "../../../util/getAllUsers";
import allMedias from "../../../util/getAllMedias";
import oneMedia from "../../../util/getOneMedia";
import getUserWishlist from "../../../util/getUserWishlist";

function Feed(props) {
    const [users, setUsers] = useState([]);
    const [medias, setMedias] = useState([]);
    const [media, setMedia] = useState([]);
    const [mediaTitles, setMediaTitles] = useState([]);
    const [userMedia, setUserMedia] = useState([])
    useEffect(() => {
        allUsers.getAllUsers().then((users) => setUsers(users));
        allMedias.getAllMedias().then((medias) => setMedias(medias));
        getUserWishlist.getUserWishlist("spongebob").then((mediaTitles) => setMediaTitles(mediaTitles))
    }, [])

    const infoArr = []
    const userList = mediaTitles.list
    for(const userMedia in userList){
        for(const media in medias){
            if(medias[media].title === userList[userMedia]){
                infoArr.push(medias[media])
            }
        }
    }
    
    return (
        <>
        <h1>Feed</h1>
        {/* <div>
            <p>{`${media.id}`} & {`${media.title}`}</p>
        </div>
        <div>
            {users.map((user) => <p> {user.id} & {user.username} & {user.email}</p>)}
        </div> */}
        {/* <div>
            {medias.map((media) => <p> {media.id} & {media.title} & {media.releaseYear}</p>)}
        </div> */}
        {/* <div>
            {infoArr.map((media) => <p> {JSON.stringify(media)} </p>)}
        </div> */}
        <div>
            {/* {userMedia.list[userMedia.list.length - 1]} */}
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