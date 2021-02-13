import React from "react";
import { connect } from "react-redux";

import { changeValue, changeRadio } from "../../reducers/search";
import { getMovies } from "../../reducers/movies";

const Search = () => {
    const { value, getMovies, checked, changeValue, changeRadio } = props;

    const handleSubmit = event => {
        event.preventDefault();
        value && getMovies(value, checked);
    };

    return (
        <div className="row">
            <form onSubmit={handleSubmit} className="col s12">
                <div className="row">
                    <div className="input-field col s10">
                        <input
                            value={value}
                            onChange={(event) => changeValue(event.target.value)}
                            id="search"
                            type="text"
                            placeholder="Search Movie"
                        />
                    </div>
                    <button className="btn">Search</button>
                </div>
                <div className="row">
                    <label>
                        <input
                            className="with-gap"
                            onChange={(event) => changeRadio(event.target.name)}
                            name="all"
                            type="radio"
                            checked={checked === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            onChange={(event) => changeRadio(event.target.name)}
                            name="movie"
                            type="radio"
                            checked={checked === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            onChange={(event) => changeRadio(event.target.name)}
                            name="series"
                            type="radio"
                            checked={checked === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </form>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        value: state.search.value,
        checked: state.search.checked,
    };
},
    mapDispatchToProps = {
        changeRadio,
        changeValue,
        getMovies,
    };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
