import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'


var { width, height } = Dimensions.get('window');

export default function Cast({cast, navigation}) {
    let characterName = "Spider-Man 2099";
    let personName = "Oscar Isaac";

  return (
    <View className="my-6">
      <Text className="text-white mx-4 mb-5 text-2xl underline">Top Cast</Text>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
            cast && cast.map((person, index) => {
                return(
                    <TouchableOpacity 
                    key={index}
                    className="mr-4 items-center"
                    onPress={() => navigation.navigate("Person", person)}
                    >
                        <Image className="rounded-2xl h-32 w-24" source={require("../assets/cast_1.jpg")}/>
                        <Text className="text-white text-md mt-1">
                            {
                                personName.length > 12 ? personName.slice(0,10) + "..." : personName
                            }
                        </Text>
                        <Text className=" text-neutral-400 text-md mt-1">
                            {
                                characterName.length > 15 ? characterName.slice(0,10) + "..." : characterName
                            }
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </View>
  )
}