import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            sortBy: 'best_match'
        };

        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Hightest Rated': 'rating',
            'Most Reviewed': 'reviw_count'
        }
    }

    getSortByClass(sortByOptions) {
        if(this.state.sortBy === sortByOptions) {
            return 'active';
        }
        return '';
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    }

    handleTermChange(event) {
        this.setState({term: event.target.value});
    }

    handleSearch(event) {
        this.props.searchMedia(this.state.term, this.state.sortBy);
        event.preventDefault();
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (<li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption} </li>
            );
        })
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="What are you looking for?" 
                    onChange={this.handleTermChange}/>
                </div>
                <div className="SearchBar-submit"
                    onClick={this.handleSearch}>
                    <a>Search</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;