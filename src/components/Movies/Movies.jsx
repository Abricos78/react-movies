import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../../reducers/movies'
import Preloader from '../Preloader/Preloader'
import Movie from './Movie/Movie'

class Movies extends Component {

    componentDidMount() {
        this.props.getMovies()
    }

    render() {
        const { movies } = this.props
        return (
            <div>
                {movies.length ? 
                    <div className='movies'>
                        {movies.map(movie => <Movie key={movie.imdbID} {...movie} />)}
                    </div>
                :
                    <Preloader />
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