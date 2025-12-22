import { View, Text, Pressable,Image,TextInput } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import Images from '@/assets/images';

const Register = () => {
  return (
    <View className="flex-1  ">
      {/* IMAGE */}
      <View className='flex justify-center items-center  w-full h-[639px] mx-auto bg-[#FFA451]'>
    <Image source={Images.basket} className="w-[301px] h-[260px] " />
      </View>
      {/* TEXT */}
      <View className="mt-10 px-6 flex gap-4 ">
        <Text className='text-[#27214D] font-[500] text-[20px]'>What is your First Name bro?</Text>
        <TextInput
          className="w-full h-[56px] rounded-[10px] bg-[#ddd3d3] "
          placeholder="Enter your firstname"
        />
      </View>
    </View>
  );
}

export default Register;    