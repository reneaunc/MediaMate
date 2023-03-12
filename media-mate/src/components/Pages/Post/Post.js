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
    return (
        <div className={styles.fullPost}>
            <div className={styles.card}>
                <img src={mediaObj.mediaImagePath} alt='' width="100%" />
                <div className={styles.cardDetails}>
                    <h3 className={styles.title}>
                        {props.curPost.username} recently added <Link to="/media-info" state={{media: mediaObj}}>
                        {mediaObj.title}
                    </Link> to their {props.curPost.action}.
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Post;