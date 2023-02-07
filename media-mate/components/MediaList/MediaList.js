import React from "react";
import './MediaList.css';
import Media from '../Media/Media';

class MediaList extends React.Component {
    render() {
        return (
            <div className="MediaList">
                <h1>{this.props.listName}</h1>
                <div className="listicle">
                {this.props.medias.map(media => {
                    return <Media media = {media} />
                })}
                </div>
            </div>
        );
    }
}

export default MediaList;
