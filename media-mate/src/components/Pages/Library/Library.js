import React from "react";
import ConsumedMedia from "../Screens/ConsumedMedia";
import WantMedia from "../Screens/WantMedia";
import './Library.css';

class Library extends React.Component {
    render() {
        return (
            <div className="Library">
                <ConsumedMedia />
                <WantMedia />
            </div>
        )
    }
};

export default Library;