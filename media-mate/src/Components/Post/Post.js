import React from 'react';
import styles from './Post.module.css';

function Post (props) {

    

    return (
        <div className={styles.fullPost}>
            <div className={styles.topInfo}>
                <h3 className={styles.userName}> {props.curPost.username}  
                    {props.curPost.mediaType == 'movie' ? " watched"
                    : props.curPost.mediaType == 'book' ? " read"
                    : props.curPost.mediaType == 'game' ? " played"
                    : ""}:</h3>
                <div className={styles.date}>{props.curPost.date}</div>
            </div>
            <div className={styles.card}>
                <img src={props.curPost.media.img} width="100%" />
                <div className={styles.cardDetails}>
                    <h3 className={styles.title}>{props.curPost.media.title}</h3>
                    <div>
                        <div className={styles.rating}>
                            {props.curPost.rating}
                        </div>
                        <p>{props.curPost.review}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Post;