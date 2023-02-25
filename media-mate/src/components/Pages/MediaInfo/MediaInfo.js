import React from "react";
import './MediaInfo.css';

class MediaInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Mad Max: Fury Road',
            releaseYear: 2015,
            rating: 'R',
            category: ['Action', 'Adventure'],
            description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
            communityReview: 8.1,
            libraryStatus: 'None', //Should be either consumed, wishlist, or None
            mediaImagePath: '../../../public/MadMax-FuryRoad.jpg'
        }
    }
    render() {
        const cardStyle = {
            backgroundImage: this.state.mediaImagePath
        }
        return (
            <div className="MediaInfoCard">
                <div className="image_container" style={cardStyle}>
                    <img src={this.state.mediaImagePath} alt=''/>
                </div>
                <h2>{this.state.title}</h2>
                <h3>Rating: {this.state.rating} Release Year: {this.state.releaseYear}</h3>
                <h3>Category: {this.state.category[0]}</h3>
                <p>{this.state.description}</p>
                <h2>{this.state.communityReview}</h2>
            </div>
        )
    }
};

export default MediaInfo;