import React from "react";
import { Text } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Logo from "~/assets/logo.png";

import S from "./styles";

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <S.Container>
      <S.Header>
        <S.SectionLogo>
          <S.Logo source={Logo} />
        </S.SectionLogo>

        <S.SectionSearch>
          <S.ButtonSearch />
          <S.InputSearch />
        </S.SectionSearch>
      </S.Header>

      <Text>Home2</Text>

      <S.Button onPress={() => navigation.navigate("Settings")}>
        <S.TextButton>Ir para configurações</S.TextButton>
      </S.Button>
    </S.Container>
  );
};

export default Home;
