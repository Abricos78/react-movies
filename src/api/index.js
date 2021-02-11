import axios from "axios"

const instance = axios.create({
    baseURL: 'http://www.omdbapi.com'
})

export const getMovies = async name => {
    let response = await instance.get(`?apikey=9c178de0&s=${name}&type=movie`)
    return response.data.Search
}