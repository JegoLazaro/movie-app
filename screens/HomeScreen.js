import { View, Text, Platform, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";

function HomeScreen() {
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
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default HomeScreen;
