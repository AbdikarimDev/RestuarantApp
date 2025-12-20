import { View, Text,Image } from 'react-native'
import React from 'react'
import Images from '../../assets/images'
const Order = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Order</Text>
      <Image source={Images.Logo} className="w-[100px] h-[100px]" />
    </View>
  )
}

export default Order


 