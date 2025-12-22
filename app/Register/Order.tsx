import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Images from "../../assets/images";
const Order = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Order</Text>
      <Image source={Images.Logo} className="w-[100px] h-[100px]" />
      <Pressable
        onPress={() => router.push("/loging/index")}
        className="bg-[#FFA451] rounded-[10px] w-[382px] h-[56px] mx-auto mt-10 justify-center items-center"
      >
        <Text className="text-white font-bold">Start Ordering</Text>
      </Pressable>
    </View>
  );
};

export default Order;
