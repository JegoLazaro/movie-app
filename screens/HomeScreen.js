import { View, Text, Platform, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
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

function HomeScreen() {
  const [trending, setTrending] = useState([1,2,3]);
  const [upcoming, setUpcoming] = useState([1,2,3]);
  const [topRated, setTopRated] = useState([1,2,3]);

  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('Search');
  }


  return (
    <View className="flex-1 bg-neutral-800">
      {/* search bar & logo */}
      <SafeAreaView className={Platform.OS === "ios" ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <TouchableOpacity>
            <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>o
            <Text style={styles.text}>v</Text>ie
            <Text style={styles.text}>s</Text>
          </Text>
          <TouchableOpacity onPress={() => handleClick()}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10}}>
        {/* trending movies */}
        <TrendingMovies data={trending} />

        {/* upcoming movies */}
        <MovieList title="Upcoming" data={upcoming}/>

        {/* top rated movies */}
        <MovieList title="Top Rated" data={topRated}/>

      </ScrollView>
    </View>
  );
}

export default HomeScreen;
