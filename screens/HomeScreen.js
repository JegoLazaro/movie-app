import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import TrendingMovies from "../components/trendingMovies";
import { styles } from "../theme";
import MovieList from "../components/movieList";
import SearchScreen from "./SearchScreen";
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

  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Search");
  };

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    //console.log('Trending Movies: ', data);
    data && data.results ? setTrending(data.results) : "";
    setLoading(false);
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    //console.log('Upcoming Movies: ', data);
    data && data.results ? setUpcoming(data.results) : "";
    //setLoading(false);
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    //console.log('Top Rated Movies: ', data);
    data && data.results ? setTopRated(data.results) : "";
    //setLoading(false);
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
    <View className="flex-1 bg-neutral-800">
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
          {trending.length > 0 && <TrendingMovies title={"Trending Movies"} data={trending} />}

          {/* top rated movies */}
          {topRated.length > 0 && (
            <MovieList title="Top Rated" data={topRated} />
          )}

          {/* upcoming movies */}
          {upcoming.length > 0 && (
            <MovieList title="Upcoming" data={upcoming} />
          )}
          {tvTrending.length > 0 && <TrendingMovies title={"Trending TV Shows"} data={tvTrending} /> }
        </ScrollView>
      )}
    </View>
  );
}

export default HomeScreen;
