import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../../reducers/movies'
import Preloader from '../Preloader/Preloader'
import Movie from './Movie/Movie'

const Movies = (props) => {
    const { movies, loading, getMovies } = props

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
            {movies ?
                loading ?
                    <Preloader />
                    :
                    <div className='movies'>
                        {movies.map(movie => <Movie key={movie.imdbID} {...movie} />)}
                    </div>
                :
                <h1>Undefined</h1>
            }
        </div>
    )
}

let mapStateToProps = state => {
    return {
        movies: state.movies.movies,
        loading: state.movies.loading
    }
},
    mapDispatchToProps = {
        getMovies
    }

export default connect(mapStateToProps, mapDispatchToProps)(Movies)