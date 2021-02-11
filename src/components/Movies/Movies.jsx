import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../../reducers/movies'
import Movie from './Movie/Movie'

class Movies extends Component {

    componentDidMount() {
        this.props.getMovies()
    }

    render() {
        const { movies } = this.props
        return (
            <div className='movies'>
                {movies.length ? movies.map(movie => <Movie key={movie.imdbID} {...movie} />)
                    :
                <h1>Loading...</h1>
                }
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        movies: state.movies.movies
    }
},
mapDispatchToProps = {
    getMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)