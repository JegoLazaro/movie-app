import axios from "axios";
import { apiKey } from "../constants";

// endpoints

const apiBaseUrl =  'https://api.themoviedb.org/3';
const trendingMoviesEP = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEP = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEP = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;

// dynamic EPs
const movieDeetsEP = id => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCastEP = id => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const similarMoviesEP = id => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;

export const image500 = path => path ? `https://image.tmdb.org/t/p/w500/${path}` : null;

export const image342 = path => path ? `https://image.tmdb.org/t/p/w342/${path}` : null;

export const image185 = path => path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

export const noPicPoster = 'https://cdn-icons-png.flaticon.com/512/2589/2589327.png';

export const noPicActor = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png';



const apiCall = async (endpoint, params) => {
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

export const fetchMovieDeets = id => {
    return apiCall(movieDeetsEP(id));
}

export const fetchMovieCast = id => {
    return apiCall(movieCastEP(id));
}

export const fetchSimilarMovies = id => {
    return apiCall(similarMoviesEP(id));
}
