import React, { useState } from "react";
import { View, Animated, Dimensions } from "react-native";
import Skeleton from "../Skeleton";

const Image = ({ source, style }: any) => {
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsLoading(false);
  };

  return (
    <View
      style={{
        backgroundColor: "#EEE",
        width: style.width || "100%",
        height: style.height || "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading && (
        <View style={[style, { position: "absolute" }]}>
          <Skeleton />
        </View>
      )}
      <Animated.Image
        source={source}
        style={[style, { position: "absolute", opacity: isLoading ? 0 : 1 }]}
        onLoad={onLoad}
      />
    </View>
  );
};

export default Image;
