import React, { FC, ReactElement } from "react";
import { Image, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import S from "./styles";
import { ItemProps } from "~/Models";

const Item: FC<ItemProps> = ({ title, img, location, data }): ReactElement => {
  return (
    <S.Container>
      <S.SectionIcon>
        <Image source={img} style={{ width: 100, height: 80, borderRadius: 8 }} />
      </S.SectionIcon>

      <S.Body>
        <S.Details>
          <S.Title>{title}</S.Title>

          {data && <S.TitleData>{data}</S.TitleData>}

          {location && <S.TitleLocation>{location}</S.TitleLocation>}
        </S.Details>

        <S.RemoveItem onPress={() => Alert.alert(title)}>
          <AntDesign name="close" size={24} color="#000000a4" />
        </S.RemoveItem>
      </S.Body>
    </S.Container>
  );
};

export default Item;
