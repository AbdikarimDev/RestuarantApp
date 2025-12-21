import images from "@/assets/images";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const myBasket = () => {
  return (
    <SafeAreaView>
      <View>
        <View className="bg-[#FFA451] flex flex-row justify-start items-start pt-10 gap-20 h-[120px] w-full">
          {/* go back button */}
          <Pressable
            onPress={() => router.push("/Register/details")}
            className="flex flex-row justify-center gap-3 ml-5 items-center w-[84px] h-[32px] rounded-full   bg-[#FFFFFF]"
          >
            <Image source={images.back} className="w-[10px] h-[20px]" />
            <Text className="font-[400] text-[#27214D] text-[16px] ">
              Go Back
            </Text>
          </Pressable>
          <Text className="font-[500] text-[24px] text-white">my Basket</Text>
        </View>
        {/* cards */}
        <View
          className="w-[380px] mx-auto mt-10 gap-8
        "
        >
          <Cards title="Quinoa Fruit Salad" image={images.Quino} />
          <Cards title="Melon fruit salad" image={images.melon} />
          <Cards title="Tropical fruit salad" image={images.Tropical} />
           {/* total and  button */}
        <View className="flex flex-row gap-5 justify-between items-end   h-[300px] mb-auto  ">
            <View>
                <Text className="font-[500] text-[14px] text-[#000]  ">Total:</Text>
                <View className="flex flex-row gap-2 ">
                    <Image source={images.naira}  className="w-[12px] h-[16px] mt-2 "/>
                    <Text className="font-[700] text-[24px] text-[#000]  ">60,000</Text>
                </View>
            </View>
            {/* button */}
            <Pressable className="bg-[#FFA451] w-[199px] h-[56px] rounded-[10px] flex justify-center items-center">
              <Text className="font-[500] text-[16px] text-white">Checkout</Text>
            </Pressable>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default myBasket;

interface CardProps {
  title: string;
  image: string;
}
const Cards = ({ title, image }: CardProps) => {
  return (
    <Pressable className="flex flex-col">
      {/* text and images  */}
      <View className="flex flex-row gap-4 justify-start items-center border-b border-[#eae0e0] pb-8">
        {/* image */}
        <View className="flex justify-center items-center bg-[#e8e3f5] rounded-[10px] w-[65px] h-[64px]">
          <Image source={image} className="w-[40px] h-[40px]" />
        </View>
        {/* text section */}
        <View>
          <Text className="font-[500] text-[16px] text-[#000]">{title}</Text>
          <Text className="font-[400] text-[14px] text-[#000] mt-2">
            2packs
          </Text>
        </View>
        {/* money section */}
        <View className="flex flex-row gap-2 justify-center items-center ml-auto">
          <Image source={images.naira} className="w-[12px] h-[16px] " />
          <Text className="font-[500] text-[16px] text-[#000]">20,000</Text>
        </View>
       
      </View>
      
    </Pressable>
  );
};
