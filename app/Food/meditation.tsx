import images from "@/assets/images";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const meditation = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ paddingBottom: 60 }}>
        {/* Content */}
        <View className="px-7 ">
          <Pressable onPress={() => router.push("/Food/welcome")}>
            <View className="w-[42px] h-[42px] bg-[#d2d6d9] flex mt-10 justify-center items-center rounded-full">
              <Image source={images.back} className="w-[10px] h-[14px]" />
            </View>
          </Pressable>
          <Text className="mt-10 font-[600] text-[#1D150F] text-[20px]">
            Meditations
          </Text>
          <Text className="mt-2 font-[400] text-[#2C2016] text-[14px]">
            Lorem Ipsum is simply dummy text
          </Text>
          <View className="flex flex-row justify-between items-center">
            <Pressable className="bg-[#75563B] w-[162px] h-[42px] rounded-[10px] mt-10">
              <Text className="text-white text-[16px] font-[600] m-auto ">
                Live
              </Text>
            </Pressable>
            <Pressable className="bg-[#e1e1dd] w-[162px] h-[42px] rounded-[10px] mt-10">
              <Text className="text-[16px] font-[600] m-auto ">Recorded</Text>
            </Pressable>
          </View>
          <View className="flex flex-row justify-between itemsc mt-10 ">
            <Cards image={images.bg} />
            <Cards image={images.flower} />
          </View>
          <View className="flex flex-row justify-between itemsc mt-10 ">
            <Cards image={images.hand} />
            <Cards image={images.water} />
          </View>
          <View className="flex flex-row justify-between itemsc mt-10 ">
            <Cards image={images.water} />
            <Cards image={images.medi} />
          </View>
          <View className="flex flex-row justify-between itemsc my-10 ">
            <Cards image={images.flower} />
            <Cards image={images.bg} />
          </View>
          <Pressable
            onPress={() => router.push("/Food/payment")}
            className="my-10 mx-auto w-full bg-[#FF7622] h-[62px] rounded-[12px]"
          >
            <Text className="text-white m-auto text-[17px] font-bold ">
              Go To Payment
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default meditation;

interface CardProps {
  image: string;
}
const Cards = ({ image }: CardProps) => {
  return (
    <View className="w-[166px] h-[161px] rounded-2xl overflow-hidden">
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }} // 🔥 THIS IS THE FIX
      >
        <View className="px-2 flex-1">
          <Text className="bg-red-600 w-[39px] h-[22px] rounded-full text-center mt-3 text-white ml-auto">
            Live
          </Text>

          <Text className="text-white font-[600] text-[12px] mt-auto">
            Meditations
          </Text>

          <View className="flex-row gap-2 mb-2">
            <Image source={images.vid} className="w-[16px] h-[16px]" />
            <Text className="text-white text-[14px]">31st Jan - 09:00 am</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
