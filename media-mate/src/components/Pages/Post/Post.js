import React from 'react';
import styles from './Post.module.css';
import { Link } from "react-router-dom";

function Post (props) {
    
    const mediaObj = {
        title: props.curPost.title, 
        releaseYear: props.curPost.releaseYear,
        rating: "N/A",
        description: props.curPost.description,
        communityReview: props.curPost.communityReview,
        libraryStatus: props.curPost.libraryStatus,
        mediaImagePath: props.curPost.mediaImagePath
    }
    function craftString(username, title){
        let msgString = ""
        if(props.curPost.action === "add consume"){
            msgString = `${username} recently added ${title} to their consumed list`
        } else if(props.curPost.action === "add wishlist"){
            msgString = `${username} recently added ${title} to their wishlist`
        } else if(props.curPost.action === "remove"){
            msgString = `${username} recently removed ${title} from their library`
        }
        return msgString 
    }
    const message = craftString(props.curPost.username, mediaObj.title)
    // {props.curPost.username} recently added <Link to="/media-info" state={{media: mediaObj}}>
    //                     {mediaObj.title}
    //                 </Link> to their {props.curPost.action}.
    console.log(message)
    return (
        <div className={styles.fullPost}>
            <Link to="/media-info" state={{media: mediaObj, from: "feed"}}>
            <div className={styles.card}>
                <img src={mediaObj.mediaImagePath} alt='' width="100%" />
                <div className={styles.cardDetails}>
                    <h3 className={styles.title}>
                        {message}
                    </h3>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Post;