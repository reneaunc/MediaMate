import React, {useState, useEffect} from "react";
import styles from './Feed.module.css';
import Post from "../Post/Post";
import allUsers from "../../../util/getAllUsers";
import allMedias from "../../../util/getAllMedias";
//import oneMedia from "../../../util/getOneMedia";
import getUserWishlist from "../../../util/getUserWishlist";
//import { get } from "mongoose";

function Feed(props) {
    const [users, setUsers] = useState([]);
    const [medias, setMedias] = useState([]);
    const [media, setMedia] = useState([]);
    const [mediaTitles, setMediaTitles] = useState([]);
    const [userMedia, setUserMedia] = useState([])
    useEffect(() => {
        allUsers.getAllUsers().then((users) => setUsers(users));
        allMedias.getAllMedias().then((medias) => setMedias(medias));
        getUserWishlist.getUserWishlist("test").then((mediaTitles) => setMediaTitles(mediaTitles))
    }, [])

    const mediaArr = []
    const usersUsed = []
    //console.log(users[0].wishlist)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    function getMediaFromTitle(title){
        for(const media in medias){
            if(medias[media].title === title){
                return medias[media]
            }
        }
    }
    
    for(let i = 0; i < 4; i++){
        let userNum = getRandomInt(users.length)
        if(usersUsed.includes(users[userNum].username)){
            continue
        }
        console.log(`userNum is ${userNum}`)
        let arrType = getRandomInt(2)
        console.log(`arrtype is ${arrType}`)
        if(arrType === 1){
            if(users[userNum].consume.length === 0){
                continue;
            }
            let media = users[userNum].consume[users[userNum].consume.length - 1]
            media = getMediaFromTitle(media)
            let postObj = {
                user: users[userNum].username,
                media: media,
                library: "consume"
            }
            mediaArr.push(postObj)
            usersUsed.push(users[userNum].username)
        } else {
            if(users[userNum].wishlist.length === 0){
                continue;
            }
            let media = users[userNum].wishlist[users[userNum].wishlist.length - 1]
            media = getMediaFromTitle(media)
            let postObj = {
                user: users[userNum].username,
                media: media,
                library: "wishlist"
            }
            mediaArr.push(postObj)
            usersUsed.push(users[userNum].username)
        }
    }
    console.log(mediaArr)
    // const infoArr = []
    // const userList = mediaTitles.list
    // for(const userMedia in userList){
    //     for(const media in medias){
    //         if(medias[media].title === userList[userMedia]){
    //             infoArr.push(medias[media])
    //         }
    //     }
    // }
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