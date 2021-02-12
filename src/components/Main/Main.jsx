import React from 'react'
import Movies from '../Movies/Movies'
import Search from '../Search/Search'

function Main() {
    return (
        <main className='container content'>
            <Search />
            <Movies />
        </main>
    )
}

export default Main
