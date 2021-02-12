import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeValue } from '../../reducers/search'
import { getMovies } from '../../reducers/movies'

class Search extends Component {

    handleSubmit = event => {
        const { value, getMovies } = this.props
        event.preventDefault()
        getMovies(value)
    }
    
    render() {
        const { value, changeValue, getMovies } = this.props
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input 
                                value={value} 
                                onChange={event => changeValue(event.target.value)}
                                onBlur={() => getMovies(value)} 
                                id="search" 
                                type="text"  
                                placeholder='Search Movie' 
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        value: state.search.value 
    }
},
mapDispatchToProps = {
    changeValue,
    getMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
