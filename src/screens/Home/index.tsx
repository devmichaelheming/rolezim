import React from "react";
import { Text, View } from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Logo from "~/assets/logo.png";
import PartyIcon from "~/assets/party.png";
import BeerIcon from "~/assets/beer.png";
import PontosIcon from "~/assets/pontos.png";
import { Feather } from "@expo/vector-icons";

import S from "./styles";
import Category from "./Widgets/Category";

const dateCategoryMock = [
  {
    id: "1",
    title: "Festas",
    icon: PartyIcon,
  },
  {
    id: "2",
    title: "Rolês",
    icon: BeerIcon,
  },
  {
    id: "3",
    title: "Rolês",
    icon: BeerIcon,
  },
  {
    id: "4",
    title: "Outros",
    icon: PontosIcon,
  },
];

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <S.Container>
      <S.Header>
        <S.SectionLogo>
          <S.Logo source={Logo} />
        </S.SectionLogo>

        <S.SectionSearch>
          <S.ButtonSearch>
            <Feather name="search" size={24} color="#e9e9e9" />
          </S.ButtonSearch>
          <S.InputSearch placeholder="Pesquisar eventos..." />
        </S.SectionSearch>
      </S.Header>

      <View style={{ width: "100%" }}>
        <S.SectionCategory
          data={dateCategoryMock}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Category title={item.title} icon={item.icon} />}
        />
      </View>

      <S.TitleHighlights>Destaques da semana</S.TitleHighlights>
    </S.Container>
  );
};

export default Home;
