import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/cast";
import MovieList from "../components/movieList";
import Loading from "../components/loading";
import {
  fetchMovieCast,
  fetchMovieDeets,
  fetchSimilarMovies,
  image500,
  noPicPoster,
} from "../api/moviedb";
import NavbarLogo from "../components/navbarLogo";
import FavGoback from "../components/favGoback";

var { width, height } = Dimensions.get("window");

export default function MovieScreen() {

  const navigation = useNavigation();
  const { params: item } = useRoute();
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovieDeets = async (id) => {
    const data = await fetchMovieDeets(id);
    //console.log("DEETS =>>: ", data);
    if (data) setMovie(data);
    setLoading(false);
  };
  const getMovieCast = async (id) => {
    const data = await fetchMovieCast(id);
    //console.log("CAST =>>: ", data);
    data && data.cast ? setCast(data.cast) : "";
    //setLoading(false);
  };

  const getSimilarMovies = async (id) => {
    const data = await fetchSimilarMovies(id);
    //console.log("CAST =>>: ", data);
    data && data.results ? setSimilarMovies(data.results) : "";
    //setLoading(false);
  };

  useEffect(() => {
    //CALL API FOR MOVIE DEETS\

    setLoading(true);
    getMovieDeets(item.id);
    getMovieCast(item.id);
    getSimilarMovies(item.id);
  }, [item]);


  return (
    <View
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <NavbarLogo />
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View className="w-full">
            <FavGoback />
            <View className="">
              <Image
                source={{ uri: image500(item.poster_path) || noPicPoster }}
                style={{ width: width, height: height * 0.75 }}
              />
              <LinearGradient
                colors={[
                  "transparent",
                  "rgba(23,23,23,.4)",
                  "rgba(23,23,23,1)",
                ]}
                style={{ width: width, height: height * 0.4 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="absolute bottom-0"
              />
            </View>
          </View>
          {/* movie details */}

          <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
            <Text className="text-white text-center text-3xl font-bold tracking-wider">
              {movie?.title}
            </Text>
            {movie?.id ? (
              <Text className="text-neutral-400 font-semibold text-base text-center">
                {movie?.status} • {movie?.release_date.slice(0, 4)} • {""}
                {movie?.runtime} mins
              </Text>
            ) : null}
            {/* deets */}

            {/* genres */}
            <View className="flex-row justify-center mx-4 space-x-2">
              {movie.genres.map((genre, index) => {
                let showDot = index + 1 != movie.genres.length;
                return (
                  <Text
                    key={index}
                    className="text-neutral-400 font-semibold text-base text-center"
                  >
                    {genre?.name} {showDot ? "•" : null}
                  </Text>
                );
              })}
            </View>
            {/* desc */}
            <Text className="text-neutral-400 mx-4 tracking-wide text-justify">
              {movie?.overview}
            </Text>
          </View>
          {/* cast members */}
          {cast.length > 0 && <Cast cast={cast} navigation={navigation} />}
          {/* similar movies */}
          <MovieList
            title="Similar Movies"
            hideSeeAll={true}
            data={similarMovies}
          />
        </ScrollView>
      )}
      {/* back button and movie poster */}
    </View>
  );
}
