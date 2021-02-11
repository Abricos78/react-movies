import React from 'react'

function Movie(props) {
    const {Title: title, Year: year, Type: type, Poster: poster} = props

    let posterImg = poster !== 'N/A' ? poster : `https://via.placeholder.com/300x450.png?text=${title}`
    
    return (
        <div className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={posterImg} alt={title} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>Type: {type} ({year})</p>
            </div>       
        </div>
    )
}

export default Movie
