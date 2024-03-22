import React, { useEffect, useRef } from "react";
import { Animated, View, Text, Image } from "react-native";

const Bai5 = () => {
  const shipperAnim = useRef(new Animated.Value(0)).current;
  const textAnim = useRef(new Animated.Value(0)).current;
  const imageAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shipperAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(shipperAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(textAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(textAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: false,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(imageAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(imageAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);
  return (
    <View>
      <Animated.Image
        source={{
          uri: "https://proship.vn/wp-content/uploads/2022/05/nghia-tu-shipper-la-gi.jpg",
        }}
        style={{
          width: 100,
          height: 100,

          resizeMode: "contain",
          transform: [
            {
              translateX: shipperAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 300],
              }),
            },
          ],
        }}
      />
      <Animated.Text
        style={{
          marginTop: 10,
          textAlign: "center",
          fontSize: textAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [14, 20],
          }),
          color: textAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["black", "orange"],
          }),
        }}
      >
        Shopee cái gì cũng có…
      </Animated.Text>


      <View style={{ flex :1,flexDirection: "row" , marginTop:30,justifyContent:'space-around'}}>
      
        <Animated.Image
          source={{
            uri: "https://gcs.tripi.vn/public-tripi/tripi-feed/img/474091MDP/hinh-anh-mi-hai-tom-dep_091734934.jpg",
          }}
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            transform: [
              {
                scale: imageAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.5],
                }),
              },
            ],
          }}
        />
        <Animated.Image
          source={{
            uri: "https://vcdn-dulich.vnecdn.net/2020/10/06/banhmi-2678-1585830175-3225-1601963256.png",
          }}
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            transform: [
              {
                scale: imageAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.5],
                }),
              },
            ],
          }}
        />
        <Animated.Image
          source={{
            uri: "https://tiemmihaomi.vn/wp-content/uploads/2023/05/Coca-ly.jpg",
          }}
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
            transform: [
              {
                scale: imageAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.5],
                }),
              },
            ],
          }}
        />
      </View>
    </View>
  );
};

export default Bai5;
