import images from "@/assets/images";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const welcome = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Content */}
        <View className="px-7 ">
          {/* Profile and back */}
          <View className="flex flex-row justify-between items-center  mt-10">
            <Pressable onPress={()=> router.push('/landingPage')}>
              <View className="w-[42px] h-[42px] bg-[#d2d6d9] flex justify-center items-center rounded-full">
              <Image source={images.back} className="w-[10px] h-[14px]" />
            </View>
            </Pressable>
            <Image
              source={images.profile}
              className="w-[52px] h-[52px] rounded-full"
            />
          </View>
          <Text className="font-bold text-[30px] mt-10">Contact Us</Text>
          <Text className="font-bold text-[17px] mt-10">
            Social Media Platforms
          </Text>
          <View className="flex  gap-10 mt-10">
            <Cards image1={images.whatsapp} title="WhatsApp" />
            <Cards image1={images.Twitter} title="Twitter" />
            <Cards image1={images.insta} title="Instagram" />
            <Cards image1={images.snap} title="snap chat" />
            <Cards image1={images.tiktok} title="Tik Tok" />
          </View>
          <Pressable onPress={() => router.push('/Food/meditation')} className="mt-20 mx-auto w-full bg-[#FF7622] h-[62px] rounded-[12px]">
            <Text className="text-white m-auto text-[17px] font-bold ">Go To Meditations</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default welcome;

interface CardProps {
  image1: string;
  title: string;
}
const Cards = ({ image1, title }: CardProps) => {
  return (
    <View className="flex flex-row justify-between items-center">
      <View className="border border-[#E4E6E8] w-[46px] h-[46px] rounded-full flex justify-center items-center shadow shadow-white ">
        <Image source={image1} />
      </View>
      <Text className="text-[#8083A3] text-[12px] font-[500] mr-auto pl-5 ">
        {title}
      </Text>
      <View className="  bg-[#1077af] w-[46px] h-[46px] rounded-full flex justify-center items-center   ">
        <Image source={images.send} className="w-[24px] h-[24px]" />
      </View>
    </View>
  );
};
