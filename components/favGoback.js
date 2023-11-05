import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline'
import { HeartIcon as HeartOut } from "react-native-heroicons/outline";
import { styles,theme } from '../theme'

const topMargin = Platform.OS == "ios" ? "" : "mt-3";


export default function FavGoback() {

    const [isFave, toggleFave] = useState(false);
    const HeartOutline = () => {
        return <HeartOut size={35} color={theme.background} fill={"white"} />;
      };
  return (
    <SafeAreaView
              className={
                "absolute z-20 w-full flex-row justify-between items-center px-4" +
                topMargin
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
  )
}