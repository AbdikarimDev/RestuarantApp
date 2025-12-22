import images from "@/assets/images";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Content = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* ONE vertical scroll for the whole screen */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View className="mx-10">
          {/* Menu + Search */}
          <View className="flex-row justify-between items-center mt-10">
            <Image source={images.alignleft} className="w-[24px] h-[24px]" />
            <Image source={images.search} className="w-[24px] h-[24px]" />
          </View>

          {/* Greeting */}
          <View className="flex-row gap-2 mt-10">
            <Text className="font-bold text-[20px]">Hello Fola</Text>
            <Image source={images.waving} className="w-[24px] h-[24px]" />
          </View>

          <Text className="font-[600] text-[#2c2a2afc] text-[10px]">
            Let’s start shopping!
          </Text>

          {/* Horizontal cards */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-10"
          >
            <View className="flex-row gap-5">
              <Cards
                title="20% OFF DURING THE WEEKEND"
                bgColor="#F17547"
                buttonColor="#FFFFFF"
                TextColor="#F17547"
              />
              <Cards
                title="40% OFF DURING THE HOLIDAYS"
                bgColor="#1383F1"
                buttonColor="#50D63B"
                TextColor="#FFFFFF"
              />
              <Cards
                title="10% OFF FOR DISABLED PEOPLE"
                bgColor="#F83758"
                buttonColor="#FFFFFF"
                TextColor="#50D63B"
              />
            </View>
          </ScrollView>

          {/* Categories */}
          <View className="mt-10">
            <View className="flex-row justify-between items-center">
              <Text className="font-bold text-[20px]">Top Categories</Text>
              <Text className="font-[500] text-[16px] text-[#F17547]">
                See All
              </Text>
            </View>

            <View className="flex-row gap-4 mt-6">
              <Category bgColor="#F17547" image={images.watch} />
              <Category bgColor="#D8D3D380" image={images.tShirt} />
              <Category bgColor="#D8D3D380" image={images.bag} />
              <Category bgColor="#D8D3D380" image={images.shoe} />
              <Category bgColor="#D8D3D380" image={images.glasses} />
            </View>
          </View>

          {/* Products */}
          <View className="mt-10">
            <View className="flex-row gap-4">
              <Watches image={images.smartWatch} title="Redmi Note 4" />
              <Watches image={images.apple} title="Apple Watch - Series 6" />
            </View>

            <View className="flex-row gap-4 mt-10">
              <Watches image={images.royal} title="Redmi Note 4" />
              <Watches image={images.casio} title="Apple Watch - Series 6" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Content;

interface CardProps {
  bgColor: string;
  TextColor: string;
  buttonColor: string;
  title: string;
}

const Cards = ({ bgColor, TextColor, buttonColor, title }: CardProps) => {
  return (
    <View
      className="w-[285px] h-[130px] rounded-[15px] p-5"
      style={{ backgroundColor: bgColor }}
    >
      <Text className="text-white font-bold text-[20px] leading-[30px] w-[182px]">
        {title}
      </Text>

      <Pressable
        className="w-[80px] h-[30px] rounded-full mt-5 items-center justify-center"
        style={{ backgroundColor: buttonColor }}
      >
        <Text style={{ color: TextColor }}>Get Now</Text>
      </Pressable>
    </View>
  );
};

interface CategoryProps {
  bgColor: string;
  image: any;
}

const Category = ({ bgColor, image }: CategoryProps) => {
  return (
    <View
      className="w-[64px] h-[62px] rounded-[8px] items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <Image source={image} className="w-[25px] h-[25px]" />
    </View>
  );
};

interface WatchesProps {
  image: any;
  title: string;
}

const Watches = ({ image, title }: WatchesProps) => {
  return (
    <View className="bg-[#f9f4f4ea] w-[174px] h-[244px] rounded-xl">
      <View className="flex-row justify-between items-center p-4">
        <Text className="font-bold text-[#000000BF] text-[11px]">
          50% OFF
        </Text>
        <Image source={images.heart} />
      </View>

      <Image source={image} className="w-[115px] h-[122px] self-center" />

      <Text className="font-[500] text-[#000000BF] text-[14px] px-4 py-3">
        {title}
      </Text>

      <View className="px-4 flex-row justify-between mb-6">
        <Text>$4,000</Text>
        <Text className="line-through">$5,000</Text>
      </View>
    </View>
  );
};
