import { View, Image, Pressable } from 'react-native';
import React from 'react';
import Logo from '../../assets/Logo.png'; 
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center">
      <Pressable 
      onPress={() => router.push('/WelcomePage')}
      >
        <Image 
          style={{width: 230, height: 230}} 
          source={Logo}  
        />
      </Pressable>
    </View>
  );
}

export default Index;