import React, { FC, ReactElement } from "react";
import { Image } from "react-native";

import S from "./styles";
import { ItemProps } from "~/Models";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface Item {
  item: ItemProps;
}

const Item: FC<Item> = ({ item }): ReactElement => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { img, location, title, data } = item;

  const handleRedirectDetails = () => {
    navigation.navigate("EventDetail");
  };

  return (
    <S.Container onPress={() => handleRedirectDetails()}>
      <S.SectionIcon>
        <Image source={img} style={{ width: 180, height: 160, borderRadius: 8 }} />
      </S.SectionIcon>

      <S.Footer>
        <S.Title>{title}</S.Title>
        {data ? <S.TitleData>{data}</S.TitleData> : <S.TitleLocation>{location}</S.TitleLocation>}
      </S.Footer>
    </S.Container>
  );
};

export default Item;
