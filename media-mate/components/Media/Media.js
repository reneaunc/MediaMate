import React from 'react';
import './Media.css';



class Media extends React.Component {
    render() {
        const {media} = this.props;
        return (
            <div className = "Media">
                <h2>{media.name}</h2>
                <div className="Media-information">
                    <div className="Media-reviews">
                        <h3>{media.category}</h3>
                        <h3 className="rating">{media.rating} stars</h3>
                        <p>{media.reviewCount} reviews</p>
                    </div>
                </div>
                <div className="Media-summary">
                    <p>{media.summary}</p>
                </div>
            </div>
        );
    }
}

export default Media