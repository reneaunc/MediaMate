import React from 'react';
import styles from './Post.module.css';

function Post (props) {
    return (
        <div className={styles.fullPost}>
            <h3 className={styles.userName}> {props.curPost.username}  
                {props.curPost.mediaType == 'movie' ? " watched"
                : props.curPost.mediaType == 'book' ? " read"
                : props.curPost.mediaType == 'game' ? " played"
                : ""}:</h3>
            <div className={styles.card}>
                <img src={props.curPost.media.img} width="100%" />
                <div>
                    <h3>{props.curPost.media.title}</h3>
                    <div>
                        <p>{props.curPost.rating}</p>
                        <p>{props.curPost.review}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Post;