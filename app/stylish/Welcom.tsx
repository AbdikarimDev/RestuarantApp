import images from "@/assets/images";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TextInput, View,Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcom = () => {
  return (
    <SafeAreaView>
      <View className="flex justify-center w-full h-full">
        <Text className="font-bold text-[36px]   mx-14  w-[185px] mt-10">
          Welcome Back!
        </Text>
        {/* Inputs */}
        <View>
          <View className="mt-10 w-[317px] h-[55px] mx-auto rounded-[10px] bg-[#e2d7d7] border border-[#A8A8A9] flex flex-row justify-start px-4 items-center">
            <Image source={images.user} className="w-[24px] h-[24px]" />
            <TextInput
              placeholder="UserName Or Email"
              className=" text-[#676767] text-[14px] font-[500] w-full"
            />
          </View>
          <View className="mt-10 w-[317px] h-[55px] mx-auto rounded-[10px] bg-[#e2d7d7] border border-[#A8A8A9] flex flex-row justify-start px-4 items-center">
            <Image source={images.user} className="w-[24px] h-[24px]" />
            <TextInput
              placeholder="Password"
              className=" text-[#676767] text-[14px] font-[500] "
            />
            <Image source={images.eye} className="w-[24px] h-[24px] ml-auto" />
          </View>
          <Text className=" mx-14 ml-auto mt-6 text-[red]">Forgot Password?</Text>
          <Pressable onPress={()=> router.push('/stylish/GetStarted')} className="w-[317px] h-[55px] mx-auto rounded-[10px] bg-[#F83758] flex justify-center items-center mt-10">
          <Text className="text-[#FFFFFF] font-bold text-[20px]">Login</Text>
          </Pressable>
          <Text className="mx-auto mt-20">- OR Continue with -</Text>
          <Image source={images.Buttons} className="w-[185px] h-[56px] mx-auto mt-10"/>
          <View className="mx-auto mt-10 flex flex-row gap-1">
            <Text className="text-[#575757] text-[14px] font-[500]">Create An Account</Text>
            <Text className="text-[#F83758] text-[14px] font-[600]">Sign Up</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcom;
