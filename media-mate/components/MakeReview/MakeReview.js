import React from "react";
import './MakeReview.css';

class MakeReview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Unknown',
            catagory: '',
            review: 'n/a',
            summery: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCatagoryChange = this.handleCatagoryChange.bind(this);
        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        /*this.saveReview = this.saveReview.bind(this);*/

    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleCatagoryChange(event) {
        this.setState({catagory: event.target.value});
    }

    handleReviewChange(event) {
        this.setState({review: event.target.value});
    }

    handleSummaryChange(event) {
        this.setState({summery: event.target.value});
    }

    /*
    handleSearch(event) {
        this.props.searchMedia(this.state.term, this.state.sortBy);
        event.preventDefault();
    } */

    render() {
        return (
            <div className="MakeReview">
                <div className="MakeReview-fields">
                    <input placeholder="Name" 
                    onChange={this.handleTermChange}/>
                </div>
                <div className="MakeReview-fields">
                    <input placeholder="Catagory" 
                    onChange={this.handleTermChange}/>
                </div>
                <div className="MakeReview-fields">
                    <input placeholder="Review Score (out of 5)" 
                    onChange={this.handleTermChange}/>
                </div>
                <div className="MakeReview-fields">
                    <input placeholder="summary..." 
                    onChange={this.handleTermChange}/>
                </div>
                <div className="MakeReview-submit"
                    onClick={this.saveReview}>
                    <a>Submit</a>
                </div>
            </div>
        )
    }
}

export default MakeReview;