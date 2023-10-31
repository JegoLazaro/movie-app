import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid';
import { HeartIcon as HeartOut } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';

import { styles, theme } from '../theme';
import Cast from '../components/cast';
import MovieList from '../components/movieList';


var { width, height } = Dimensions.get('window');
const topMargin = Platform.OS == "ios"? '' : 'mt-3';


export default function MovieScreen() {
    let movieName = "Spider-Man: Across the Spider-Verse";
    
    const navigation = useNavigation();
    const [isFave,toggleFave] = useState(false);
    const {params: item} = useRoute();
    const [cast, setCast] = useState([1,2,3,4,5]);
    const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5]);


    useEffect(() => {
        //CALL API FOR MOVIE DEETS
    }, [item]);

    const HeartOutline = () => {
        return (
            <HeartOut size={35} color={ theme.background } fill={"white"}/>
        )
    }



  return (
    <ScrollView
    contentContainerStyle={{paddingBottom: 20}}
    className="flex-1 bg-neutral-900"
    >
        {/* back button and movie poster */}
        <View className="w-full">
            <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4" + topMargin}>
                <TouchableOpacity style={styles.background} className="rounded-xl p-1" onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFave(!isFave)}>
                    {/* <HeartIcon size={35} color={ isFave ? "red" : "white"}/> */}
                    {
                        isFave ? <HeartIcon size={35} color={ theme.background}/> 
                        : HeartOutline()
                    }
                </TouchableOpacity>
            </SafeAreaView>
            <View className="" >
                <Image source={require("../assets/mp_1.jpg")} style={{width: width, height: height*.55}}/>
                <LinearGradient 
                colors={['transparent', 'rgba(23,23,23,.4)','rgba(23,23,23,1)']}
                style={{width: width, height: height * .4}}
                start={{x: .5, y: 0}}
                end={{x: .5, y: 1}}
                className="absolute bottom-0"
                />
            </View>
        </View>
        {/* movie details */}

        <View style={{marginTop: -(height * .09)}} className="space-y-3">
            <Text className="text-white text-center text-3xl font-bold tracking-wider">{ movieName }
            </Text>
            {/* deets */}
            <Text className="text-neutral-400 font-semibold text-base text-center">
                Released • 2023 • 140 mins
            </Text>
            {/* genres */}
            <View className="flex-row justify-center mx-4 space-x-2">
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Action •
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Thrill •
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Comedy 
                </Text>
            </View>
            {/* desc */}
            <Text className="text-neutral-400 mx-4 tracking-wide text-justify">
            The story continues with Miles Morales navigating the complexities of his dual life as Spider-Man. As he delves deeper into the multiverse, he encounters new challenges and forms an unlikely alliance with various versions of Spider-People. Together, they face formidable adversaries while exploring the intricacies of parallel dimensions. The sequel promises to deliver exhilarating action, heartfelt moments, and further exploration of the Spider-Verse's rich and diverse universe.
                </Text>
        </View>
        {/* cast members */}
        <Cast cast={cast} navigation={navigation}/>
        {/* similar movies */}
        <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/> 

    </ScrollView>
  )
}