import { View, Text, Pressable,Image, ScrollView } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import Fruit from '../../assets/fruit.png';

const WelcomePage = () => {
  return (
    <View className="flex-1  ">
      {/* IMAGE */}
      <View className='flex justify-center items-center  w-full h-[639px] mx-auto bg-[#FFA451]'>
    <Image source={Fruit} className="w-[301px] h-[260px] " />
      </View>
      {/* TEXT */}
      <ScrollView className='mb-10'>
      <View className="mt-10 px-6 flex gap-4 ">
        <Text className='text-[#27214D] font-[500] text-[20px]'>Get The Freshest Fruit Salad Combo</Text>
        <Text  className='text-[#5D577E] font-[400] text-[16px] w-[282px]'>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</Text>
      </View>
      {/* BUTTON   */}
      <Pressable  onPress={() => router.push('/Register')} className="bg-[#FFA451] rounded-[10px] w-[382px] h-[56px] mx-auto mt-10 justify-center items-center">
        <Text className="text-white font-bold">Let’s Continue</Text>
      </Pressable>
      </ScrollView>
    </View>
  );
}

export default WelcomePage;