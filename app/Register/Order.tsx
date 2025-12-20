import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../../assets/images";

const Order = () => {
  const cards = [
    {
      id: 1,
      title: "Honey Lime Combo",
      price: "2,000",
      image: Images.HoneyLimeCombo,
    },
    {
      id: 2,
      title: "Berry Mango Combo",
      price: "8,000",
      image: Images.BerryMangoCombo,
    },
    {
      id: 3,
      title: "Fruit Basket",
      price: "4,000",
      image: Images.fruit,
    },
    {
      id: 4,
      title: "Fresh Basket",
      price: "1,000",
      image: Images.basket,
    },
  ];
  const populars = [
    {
      id: 1,
      title: "Quinoa fruit salad",
      price: "10,000",
      image: Images.Quino,
          bgColor: '#FFFAEB', // light pink

    },
    {
      id: 2,
      title: "Tropical fruit salad",
      price: "10,000",
      image: Images.Tropical,
          bgColor: '#FDF2F8', // light pink

    },
    {
      id: 3,
      title: "Fruit Basket",
      price: "$8.99",
      image: Images.BerryMangoCombo,
          bgColor: '#F1EFF6', // light pink

    },
    {
      id: 4,
      title: "Fresh Basket",
      price: "$9.99",
      image: Images.HoneyLimeCombo,
          bgColor: '#FDF2F8', // light pink

    },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1  w-[382px] mx-auto mt-14">
        <View className="flex flex-row justify-between">
          {/* menu and basket images */}
          <Image source={Images.menu} className="w-[24px] h-[17px]  " />

          <Image
            source={Images.shopingBasket}
            className=" w-[34px] h-[34px]  "
          />
        </View>
        {/* Texts */}
        <View className="mt-6 w-[250px] flex  gap-2">
          <Text className="text-[#27214D] font-[400] text-[20px]">
            Hello Tony ✋
          </Text>
          <Text className="text-[#27214D] font-[500] text-[20px]">
            What fruit salad combo do you want today?
          </Text>
        </View>
        {/* inputs and filter */}
        <View className="mt-6 w-full flex flex-row justify-between  pr-2 items-center">
          <View className="flex flex-row w-[288px] justify-center items-center   bg-[#ddd3d3] rounded-[10px]">
            <Image
              source={Images.search}
              className="w-[24px] h-[24px] mx-auto ml-2"
            />

            <TextInput
              className="w-full h-[56px] rounded-[10px] bg-[#ddd3d3] "
              placeholder="Search for fruit salad combos"
            />
          </View>
          {/* filter */}
          <View>
            <Image source={Images.filter} className="w-[26px] h-[17px] " />
          </View>
        </View>
        {/* Recommended Combo */}
        <Text className="text-[#27214D] font-[500] text-[24px] mt-10">
          Recommended Combo
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 1,  }}
        >
          {cards.map((card) => (
            <View
              key={card.id}
              className="w-[172px] h-[183px] mt-8 mr-4 bg-white rounded-2xl "
            >
              <Image
                source={Images.love}
                className="h-[14px] m-3 w-[16px]"
                resizeMode="cover"
              />
              <Image
                source={card.image}
                className="h-[80px] mx-auto w-[80px]"
                resizeMode="cover"
              />

              <View className="p-4">
                <Text className="text-lg text-[#27214D] font-[500] ">
                  {card.title}
                </Text>
                <View className="flex flex-row justify-between items-center gap-4">
                  <Image source={Images.naira} className="w-[16px] h-[12px] mt-1" />

                  <Text className="text-[#F08626] font-[400] text-[17px] mt-1">
                    {card.price}
                  </Text>
                  <Image source={Images.add} className="w-[24px] h-[24px] mt-2" />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        
        {/* Popular */}
        <Text className="text-[#27214D] font-[500] text-[24px] mt-[-80px]">
          Popular
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 1 }}
        >
          {populars.map((popular) => (
            <View
              key={popular.id}
              style={{ backgroundColor: popular.bgColor }}
              className="w-[172px] h-[183px] mt-8 mr-4   rounded-2xl"
            >
              <Image
                source={Images.love}
                className="h-[14px] m-3 w-[16px]"
                resizeMode="cover"
              />
              <Image
                source={popular.image}
                className="h-[80px] mx-auto w-[90px]"
                resizeMode="cover"
              />

              <View className="p-4">
                <Text className="text-lg text-[#27214D] font-[500] ">
                  {popular.title}
                </Text>
                <View className="flex flex-row justify-between items-center gap-4">
                  <Image source={Images.naira} className="w-[16px] h-[12px] mt-1" />

                  <Text className="text-[#F08626] font-[400] text-[17px] mt-1">
                    {popular.price}
                  </Text>
                  <Image source={Images.add} className="w-[24px] h-[24px] mt-2" />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Order;
