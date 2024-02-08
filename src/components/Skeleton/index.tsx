import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { Easing } from "react-native";
import { View, Animated, Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const Skeleton = () => {
  const AnimatedView = Animated.createAnimatedComponent(LinearGradient);
  const AnimatedValue = new Animated.Value(0);
  const translateX = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(AnimatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#a0a0a0",
          borderColor: "#b0b0b0",
          width: "100%",
          height: "100%",
          borderRadius: 6,
          overflow: "hidden",
        }}
      >
        <AnimatedView
          colors={["#a0a0a0", "#b0b0b0", "#b0b0b0", "#a0a0a0"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            StyleSheet.absoluteFillObject,
            {
              transform: [{ translateX: translateX }],
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Skeleton;
