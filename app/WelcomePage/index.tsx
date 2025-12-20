import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const WelcomePage = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-bold mb-10">Welcome Page!</Text>
      
      <Pressable 
     onPress={() => router.push('/landingPage')}
        className="bg-blue-500 px-6 py-3 rounded-lg"
      >
        <Text className="text-white text-lg">Go Back</Text>
      </Pressable>
    </View>
  );
}

export default WelcomePage;