import images from "@/assets/images";
import React from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const content = () => {
  return (
    <SafeAreaView>
      <View className="flex mx-10">
      <View className=" flex flex-row justify-between mt-10">
        <Image source={images.alignleft} className="w-[24px] h-[24px]"/>
        <Image source={images.search} className="w-[24px] h-[24px]"/>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default content;
