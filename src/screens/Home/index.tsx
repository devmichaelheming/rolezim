import React from "react";
import { Text } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import S from "./styles";

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <S.Container>
      <Text>Home</Text>

      <S.Button onPress={() => navigation.navigate("Settings")}>
        <S.TextButton>Ir para configurações</S.TextButton>
      </S.Button>
    </S.Container>
  );
};

export default Home;
