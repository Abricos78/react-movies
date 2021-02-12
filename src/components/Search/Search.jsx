import React, { Component } from "react";
import { connect } from "react-redux";

import { changeValue, changeRadio } from "../../reducers/search";
import { getMovies } from "../../reducers/movies";

class Search extends Component {
    handleSubmit = event => {
        event.preventDefault();

        const { value, getMovies, checked } = this.props;
        value && getMovies(value, checked);
    };

    render() {
        const { value, changeValue, changeRadio, checked } = this.props;
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit} className="col s12">
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
