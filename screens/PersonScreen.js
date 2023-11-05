import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { HeartIcon as HeartOut } from "react-native-heroicons/outline";

import { styles, theme } from "../theme";
import { useNavigation } from "@react-navigation/native";
import MovieList from "../components/movieList";
import Loading from "../components/loading";

var { width, height } = Dimensions.get("window");

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFave, toggleFave] = useState(false);
  const verticalMargin = Platform.OS == "ios" ? "" : "my-3";
  const [personMovies, setPersonMovies] = useState([1,2,3,4,5]);
  const [loading, setLoading] = useState(true);


  const HeartOutline = () => {
    return <HeartOut size={35} color={theme.background} fill={"white"} />;
  };
  return (
    <ScrollView
      className="flex-1 bg-slate-800"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView
        className={
          "z-20 w-full flex-row justify-between items-center px-4" +
          verticalMargin
        }
      >
        <TouchableOpacity
          style={styles.background}
          className="rounded-xl p-1"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFave(!isFave)}>
          {/* <HeartIcon size={35} color={ isFave ? "red" : "white"}/> */}
          {isFave ? (
            <HeartIcon size={35} color={theme.background} />
          ) : (
            HeartOutline()
          )}
        </TouchableOpacity>
      </SafeAreaView>
      {
        loading ? (
            <Loading />
        ) : (
            <View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: theme.background,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.35,
          }}
        >
          <View className="items-center rounded-full overflow-hidden border-2 border-neutral-500">
            <Image
              source={require("../assets/cast_1.jpg")}
              style={{ height: height * 0.43, width: width * 0.75 }}
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            Oscar Isaac
          </Text>
          <Text className="text-base text-neutral-500 text-center">
            Guatemala, Guatemala City
          </Text>
        </View>
        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Gender</Text>
                <Text className="text-neutral-300 text-sm">Male</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center pr-4">
                <Text className="text-white font-semibold">Birthday</Text>
                <Text className="text-neutral-300 text-sm">1978-07-05</Text>
            </View>
            <View className="border-r-2 border-r-neutral-400 px-2 items-center pr-4">
                <Text className="text-white font-semibold">Known for</Text>
                <Text className="text-neutral-300 text-sm">Moon Knight</Text>
            </View>
            <View className="px-2 items-center">
                <Text className="text-white font-semibold">Popularity</Text>
                <Text className="text-neutral-300 text-sm">89.34</Text>
            </View>
        </View>
        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
          Oscar Isaac was born Óscar Isaac Hernández Estrada in Guatemala, to a Guatemalan mother, María Eugenia, and a Cuban father, Oscar Gonzalo Hernández-Cano, a pulmonologist. Oscar was raised in Miami, Florida. Before he became an actor, he played lead guitar and sang vocals in his band the Blinking Underdogs. He graduated from the Juilliard School in 2005.
          </Text>
        </View>
        {/* movieList */}
        <MovieList title={"Movies"} hideSeeAll={true} data={personMovies}/>
      </View>
        )
      }
      {/* person deets */}
      
    </ScrollView>
  );
}
