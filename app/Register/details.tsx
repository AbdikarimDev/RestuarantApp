import images from "@/assets/images";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const details = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-col w-full h-full justify-between bg-[#FFA451]">
        <View className="w-full h-[330px] bg-[#FFA451]">
          {/* go back button */}
          <Pressable
            onPress={() => router.push("/Register/Order")}
            className="flex flex-row justify-center gap-3 ml-5 items-center w-[84px] h-[32px] rounded-full mt-10 bg-[#FFFFFF]"
          >
            <Image source={images.back} className="w-[10px] h-[20px]" />
            <Text className="font-[400] text-[#27214D] text-[16px] ">
              Go Back
            </Text>
          </Pressable>
          {/* quino button */}
          <View className="w-full h-[260px] flex justify-center items-center ">
            <Image source={images.Quino} className="w-[176px] h-[176px] " />
          </View>
        </View>
        {/* details section */}
        <View className="w-full px-5 h-full bg-[#fff] rounded-t-[30px] ">
          <Text className="font-[700] text-[32px] text-[#27214D] mt-14">
            Quinoa Fruit Salad
          </Text>
          <View className="flex flex-row justify-between items-center border-b  border-[#e0dbdb] pb-9">
            {/* right  */}
            <View className="flex flex-row justify-center items-center gap-4 ">
              <Image
              source={images.minus}
              className="w-[32px] h-[32px] "
            />
            <Text className="font-[400] h-[50px] flex justify-start items-start  text-[32px] text-[#27214D] mt-5 ">
              1
            </Text>

            <Image
              source={images.add}
              className="w-[32px] h-[32px] "
            />
            </View>
            {/* left */}
            <View className="flex flex-row justify-center gap-5 items-center ">
              <Image
              source={images.naira}
              className="w-[12px] h-[16px] "
            />
            <Text className="font-[400] text-[24px] text-[#27214D] ">2,000</Text>
            </View>

            </View>
            {/* one pack text section */}
            <View className=" border-b  border-[#e0dbdb] pb-9">
              <Text className="font-[500] text-[20px] w-[150px] h-[32px] text-[#27214D] border-b-2 border-[#FFA451] mt-7">
                One Pack Contains:
              </Text>
              <Text className="text-[#27214D] font-[500] text-[17px] mt-5">Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.</Text>
            </View>
            <Text className="  font-[400] text-[14px] w-[284px] my-8">If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make</Text>
            <View className="flex flex-row justify-center items-center gap-14">
              <Image source={images.love2} className="w-[48px] h-[48px]"/>
              <Pressable className="flex justify-center items-center w-[259px] h-[56px] bg-[#FFA451] rounded-[12px]">
                <Text className="font-[500] text-[16px] text-white  ">Add To basket</Text>
              </Pressable>

            </View>
          </View>

        </View> 
    </SafeAreaView>
  );
};

export default details;
