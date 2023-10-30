import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid';
import { HeartIcon as HeartOut } from 'react-native-heroicons/outline';


import { styles, theme } from '../theme';
import { useNavigation } from '@react-navigation/native';

var { width, height } = Dimensions.get('window');

export default function PersonScreen() {
    const navigation = useNavigation();
    const [isFave,toggleFave] = useState(false);
    const verticalMargin = Platform.OS == "ios"? '' : 'my-3';

    const HeartOutline = () => {
        return (
            <HeartOut size={35} color={ theme.background } fill={"white"}/>
        )
    }
  return (
    <ScrollView className="flex-1 bg-neutral-900"
    contentContainerStyle={{paddingBottom: 20}}>
      <SafeAreaView className={"z-20 w-full flex-row justify-between items-center px-4" + verticalMargin}>
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
            {/* person deets */}
            
    </ScrollView>
  )
}