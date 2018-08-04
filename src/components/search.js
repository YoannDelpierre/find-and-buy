import React from 'react';
import './Search.css';

const Search = (props) => (
    <ul className="Search">
        <li>Budget: {props.search.budget}</li>
        <li>Surface: {props.search.surface}</li>
        <li>Rooms: {props.search.rooms}</li>
        <li>Score: {props.search.score}</li>
    </ul>
);

export default Search;