import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY

const instance = axios.create({
    baseURL: 'http://www.omdbapi.com'
})


export const getMovies = async (name, type) => {
    let searchType = type === 'all' ? '' : type
    let response = await instance.get(`?apikey=${API_KEY}&s=${name}${searchType && `&type=${type}`}`)
    return response.data.Search
}