import images from "@/assets/images";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const payment = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ paddingBottom: 60 }}>
        <View className="mx-8">
          {/* content */}
          <View className="flex flex-row gap-5 justify-start items-center ">
            <Pressable onPress={() => router.push("/Food/meditation")}>
              <View className="w-[42px] h-[42px] bg-[#d2d6d9] flex mt-10 justify-center items-center rounded-full">
                <Image source={images.back} className="w-[10px] h-[14px]" />
              </View>
            </Pressable>
            <Text className="mt-auto h-[32px] font-[400] text-[#181C2E] text-[18px]">
              payment
            </Text>
          </View>
          {/* IMAGES */}
          <View className="flex flex-row justify-between items-center mt-20">
            <Image source={images.Cash} className="w-[85px] h-[93px]" />
            <Image source={images.Visa} className="w-[85px] h-[93px]" />
            <Image source={images.MasterCard} className="w-[85px] h-[93px]" />
          </View>
          {/* master card */}
          <View className="bg-[#e8e8e8] gap-5 py-10 rounded-[10px] flex justify-center items-center mt-20">
            <Image
              source={images.mastarCard}
              className="w-[228px] h-[146px] "
            />
            <Text className="font-bold text-[16px] text-[#32343E] ">
              No master card added
            </Text>
            <Text className="font-[400] text-[16px] text-[#2D2D2D] w-[220px] text-center ">
              You can add a mastercard and save it for later
            </Text>
          </View>
          <Pressable className="my-10 mx-auto w-full border border-[#dee1e5]  h-[62px] rounded-[12px]">
            <Text className="text-[#FF7622] m-auto text-[17px] font-bold ">
              + Add New
            </Text>
          </Pressable>
          <View className="flex flex-row justify-start items-center gap-3 mt-10">
            <Text className="font-[400] text-[#A0A5BA] text-[17px] ">
              Total:
            </Text>
            <Text className="font-[400] text-[#181C2E] text-[22px] ">$96</Text>
          </View>
          <Pressable
            onPress={() => router.push("/landingPage")}
            className="my-10 mx-auto w-full bg-[#FF7622] h-[62px] rounded-[12px]"
          >
            <Text className="text-white m-auto text-[17px] font-bold ">
             Pay & Confirm
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default payment;
