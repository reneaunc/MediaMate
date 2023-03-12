import React from 'react';
import styles from './Post.module.css';
import { Link } from "react-router-dom";

function Post (props) {
    

    return (
        <div className={styles.fullPost}>
            <div className={styles.card}>
                <img src={props.curPost.media.mediaImagePath} alt='' width="100%" />
                <div className={styles.cardDetails}>
                    <h3 className={styles.title}>
                        {props.curPost.username} recently added <Link to="/media-info" state={{media: props.curPost.media}}>
                        {props.curPost.media.title}
                    </Link> to their {props.curPost.library}.
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Post;