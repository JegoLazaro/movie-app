import axios from "axios";
import { apiKey, apiBaseUrl } from "../constants";
import { apiCall } from "./moviedb";

// endpoints

const tvTrendingEP = `${apiBaseUrl}/trending/tv/day?${apiKey}`;


export const fetchTvTrending = () => {
    return apiCall(tvTrendingEP);
}