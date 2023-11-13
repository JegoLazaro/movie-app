import {
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import TrendingMovies from "../components/trendingMovies";
import { styles } from "../theme";
import MovieList from "../components/movieList";
import Loading from "../components/loading";
import NavbarLogo from "../components/navbarLogo";
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../api/moviedb";
import { fetchTvTrending } from "../api/tvdb";


function HomeScreen() {
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  const [tvTrending ,setTvTrending] = useState([]);
  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    data && data.results ? setTrending(data.results) : "";
    setLoading(false);
  };

  const getUpcomingMovies = async () => {
    try {
      const data = await fetchUpcomingMovies();
      data && data.results? setUpcoming(data.results) : "";
      console.log('MOVIE DEETS: ', data);
      
    }catch (e) {
      console.log('Error in getting Upcoming Movies',e);
    }
  };

  const getTopRatedMovies = async () => {
    try{
      const data = await fetchTopRatedMovies();
      data && data.results? setTopRated(data.results) : "";
    }catch (e) {
      console.log('Error in getting Top Rated Movies',e);
    }
  };

  const getTvTrending = async () => {
    const data = await fetchTvTrending();
    data && data.results ? setTvTrending(data.results) : "";
    //setLoading(false);
  }

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();

    getTvTrending();
  }, []);

  return (
    <View className="flex-1 bg-slate-800">
      {/* search bar & logo */}
      <NavbarLogo />

      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {/* trending movies */}
          {trending.length > 0 && <TrendingMovies title={"Trending Movies"} data={trending} media={'movie'}/>}

          {/* top rated movies */}
          {topRated.length > 0 && (
            <MovieList title="Top Rated" data={topRated} media={"movie"}/>
          )}

          {/* upcoming movies */}
          {upcoming.length > 0 && (
            <MovieList title="Upcoming" data={upcoming} media={"movie"}/>
          )}
          {tvTrending.length > 0 && <TrendingMovies title={"Trending TV Shows"} data={tvTrending} media={'tv'}/> }
        </ScrollView>
      )}
    </View>
  );
}

export default HomeScreen;
