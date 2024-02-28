// components/SearchBar.js
import React from 'react';

const SearchBar = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Enter city..." />
            </div>
            <div className="col-md-6">
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
    );
}

export default SearchBar;
