import images from "@/assets/images";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GetStarted = () => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={images.background}
          className="w-full h-[844px]"
          style={{ height: 885 }}
        > 
          <View className="flex justify-end pb-20 items-center h-full ">
            <Text className="text-white font-bold text-[34px] leding-[100px] w-[215px]  text-center   ">
              You want Authentic, here you go!
            </Text>
            <Text className="text-[#F2F2F2] font-[400] text-[14px]   text-center   ">
              Find it here, buy it now!
            </Text>
            <Pressable
              onPress={() => router.push("/stylish/content")}
              className="w-[279px] h-[55px] mx-auto rounded-[4px] bg-[#F83758] flex justify-center items-center mt-10"
            >
              <Text className="text-[#FFFFFF] font-bold text-[20px]">
                Get Started
              </Text>
            </Pressable>
          </View> 
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
