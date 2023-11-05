import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function NavbarLogo() {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Search");
  };
  return (
    <SafeAreaView className={Platform.OS === "ios" ? "-mb-6" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <TouchableOpacity>
            <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>L</Text>a
            <Text style={styles.text}>z</Text>a
            <Text style={styles.text}>ro</Text>
          </Text>
          <TouchableOpacity onPress={() => handleClick()}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  )
}