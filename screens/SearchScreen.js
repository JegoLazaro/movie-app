// SearchScreen.js

import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { styles, theme } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { XMarkIcon } from "react-native-heroicons/solid";
import { TouchableWithoutFeedback } from "react-native";
import Loading from "../components/loading";

var { width, height } = Dimensions.get("window");
const topMargin = Platform.OS == "ios" ? "" : "my-3";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([
     1,2,3,4,5,6,7,8,9
    ]);

  let movieName = "Spider-Man: Across the Spider-Verse";


  return (
    <View
      contentContainerStyle={{ paddingBottom: 40 }}
      className="flex-1 bg-neutral-800"
    >
      <View className="w-full ">
        <SafeAreaView className="absolute w-full flex-row justify-between items-center">
          {/* go back button */}
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl my-3 mx-4 p-1"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <View className="w-80 mx-5 flex-row justify-between">
            {/* search bar */}
            <TextInput
              className="pl-4 flex-1 my-3 mr-4"
              style={{
                height: 40,
                borderRadius: 15,
                borderColor: theme.text,
                borderWidth: 1,
                marginBottom: 12,
                padding: 10,
                color: "white",
              }}
              placeholder="Search Movie..."
              placeholderTextColor={"grey"}
              onChangeText={(text) => setSearchQuery(text)}
              value={searchQuery}
            />
          </View>
        </SafeAreaView>
      </View>
      {/* movie results */}
      {
        loading ? (
            <Loading />
        ) : 
        
            results.length > 0 ? (
                <ScrollView
            showsVerticalSCrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 15 }}
            className="space-y-3 mt-28 pl-4 pr-4"
          >
            <Text className="text-white font-semibold ml-1">
              Results ({results.length})
            </Text>
            <View className="flex-row justify-between flex-wrap">
              {
                results.map((item, index) => {
                    return (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => navigation.push("Movie", item)}
                    >
                        <View className="space-y-2 mb-4">
                        <Image
                            className="rounded-3xl"
                            source={require("../assets/mp_1.jpg")}
                            style={{ width: width * 0.44, height: height * 0.3 }}
                        />
                        <Text className="text-neutral-300 text-center ml-1">{movieName.length > 22
                        ? movieName.slice(0, 22) + "..."
                        : movieName}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    );
                })
              }
            </View>
          </ScrollView>
            ) : (
                <View>
                <View className="flex-row justify-center">
                    <Image source={require("../assets/search_bg.png")} className="h-64 mt-40  w-auto" style={{objectFit: "contain"}}/>
                </View>
                <Text className="text-neutral-300 text-3xl text-center ml-1">What movie to watch?</Text>
                </View>
            )
          
      }
      
      
    </View>
  );
};

export default SearchScreen;
