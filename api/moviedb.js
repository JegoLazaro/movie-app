import axios from "axios";
import { apiKey, apiBaseUrl } from "../constants";

// endpoints


const trendingMoviesEP = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEP = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`; 
const topRatedMoviesEP = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;

// dynamic EPs
const movieDeetsEP = (id,media) => `${apiBaseUrl}/${media}/${id}?api_key=${apiKey}`;
const movieCastEP = (id,media) => `${apiBaseUrl}/${media}/${id}/credits?api_key=${apiKey}`;
const similarMoviesEP = (id,media) => `${apiBaseUrl}/${media}/${id}/similar?api_key=${apiKey}`;

export const image500 = path => path ? `https://image.tmdb.org/t/p/w500/${path}` : null;

export const image342 = path => path ? `https://image.tmdb.org/t/p/w342/${path}` : null;

export const image185 = path => path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

export const noPicPoster = 'https://cdn-icons-png.flaticon.com/512/2589/2589327.png';

export const noPicActor = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png';



export const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch(e){
        console.log('ERROR: ', e);
        return {}
    }
} 

export const fetchTrendingMovies = () => {
    return apiCall(trendingMoviesEP);
}

export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMoviesEP);
}

export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEP);
}

export const fetchMovieDeets = (id,media) => {
    return apiCall(movieDeetsEP(id,media));
}

export const fetchMovieCast = (id,media) => {
    return apiCall(movieCastEP(id,media));
}

export const fetchSimilarMovies = (id,media) => {
    return apiCall(similarMoviesEP(id,media));
}
