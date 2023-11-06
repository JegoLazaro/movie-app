import { View, Text, TouchableWithoutFeedback, Image, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import { image500 } from "../api/moviedb";

var { width, height } = Dimensions.get("window");

function TrendingMovies({ data, title, media }) {
  const navigation = useNavigation();
  const handleClick = (item, media) => {
    navigation.navigate("Movie", { item, media });
  };

  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">{title}</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={() => handleClick(item, media)} media={media}/>
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick, media }) => {
  //console.log("MEDIA TYPE OF ITEM IS:", item.media_type)
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item, media)}>
      <Image
        source={{ uri: image500(item.poster_path) }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 20,
          objectFit: "contain",
        }}
      />
      
    </TouchableWithoutFeedback>
  );
};

export default TrendingMovies;
