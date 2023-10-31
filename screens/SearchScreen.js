// SearchScreen.js

import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { styles, theme } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { XMarkIcon } from "react-native-heroicons/solid";

var { width, height } = Dimensions.get("window");
const topMargin = Platform.OS == "ios" ? "" : "mt-3";

const SearchScreen = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  

  return (
    <View
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full ">
        <SafeAreaView
          className={
            " absolute z-20 w-full flex-row justify-between items-center px-4" +
            topMargin
          }
        >
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
                width: "100%",
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
     
    </View>
  );
};

export default SearchScreen;
