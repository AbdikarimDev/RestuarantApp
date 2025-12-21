import images from "@/assets/images";
import React from "react";
import { router } from "expo-router";
import { Image, Text, View,Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const succsess = () => {
  return (
    <SafeAreaView>
      <View className="flex h-full w-full justify-center items-center gap-5">
        <Image source={images.succsess} className="w-[164px] h-[164px]" />
        <Text className="text-[32px] text-[#27214D] font-[500]">
          Congratulations!!!
        </Text>
        <Text className="text-[20px] w-[200px] text-[#27214D] font-[400]">
          Your order have been taken and is being attended to
        </Text>
        <Pressable
          onPress={() => router.push("/Register/Tracking")}
          className="bg-[#FFA451] w-[165px] h-[56px] rounded-[10px] mt-10 flex justify-center items-center"
        >
          <Text className="font-[500] text-[16px] text-white">
           Track order
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/Register/Order")}
          className="border border-[#FFA451] mt-10 h-[56px] rounded-[10px] flex justify-center items-center"
          style={{width:200}}
        >
          <Text className="font-[500] text-[16px] text-[#FFA451]">
           Continue shopping
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default succsess;
