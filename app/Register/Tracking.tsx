import images from "@/assets/images";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const myBasket = () => {
  return (
    <SafeAreaView>
      <View>
        <View className="bg-[#FFA451] flex flex-row justify-start items-start pt-10 gap-20 h-[120px] w-full">
          {/* go back button */}
          <Pressable
            onPress={() => router.push("/Register/succsess")}
            className="flex flex-row justify-center gap-3 ml-5 items-center w-[84px] h-[32px] rounded-full   bg-[#FFFFFF]"
          >
            <Image source={images.back} className="w-[10px] h-[20px]" />
            <Text className="font-[400] text-[#27214D] text-[16px] ">
              Go Back
            </Text>
          </Pressable>
          <Text className="font-[500] text-[24px] text-white">
            Delivery Status
          </Text>
        </View>
        <View className="flex flex-col gap-9 px-6 mt-10">
          <Cards title="Order Taken" image1={images.order} image2={images.tick}/>
          <Cards title="Order Is Being Prepared" image1={images.preparing} image2={images.tick}/>
          <Cards title="Order Is Being Delivered" image1={images.delivery} image2={images.call}/>
          <Image source={images.map} className="w-[327px] h-[128px] mx-auto mt-5"/>
          <Cards title="Order Recieved" image1={images.tick} image2={images.dot} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default myBasket;

interface CardProps{
    title:string,
    image1:string,
    image2:string,
}
const Cards = ({title,image1,image2}:CardProps) => {
  return (
    <View className="flex flex-row justify-start items-center gap-4">
      <View className="bg-[#FFFAEB] rounded-[10px] w-[65px] h-[64px] flex justify-center items-center">
        <Image source={image1} className="w-[48px] h-[43px]" />
      </View>
      <Text className="font-[500] text-[16px] ">{title}</Text>
      <Image source={image2}  className="w-[25px] h-[25px] ml-auto"/>
    </View>
  );
};
