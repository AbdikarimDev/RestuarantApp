import React from "react";
import { Image, Pressable, View } from "react-native";

import images from "@/assets/images";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center">
      {/* <Pressable onPress={() => router.push("/WelcomePage")}>
        <Image style={{ width: 230, height: 230 }} source={images.Logo} />
      </Pressable> */}

      
          <Pressable onPress={() => router.push("/stylish/Welcom")}>
          <Image style={{ width: 274, height: 100 }} source={images.stylish} />
        </Pressable> 
    </View>
  );
};

export default Index;
