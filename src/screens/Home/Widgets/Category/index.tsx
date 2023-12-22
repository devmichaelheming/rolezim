import React, { FC, ReactElement, ReactNode } from "react";
import { View, Text, Image, Alert } from "react-native";
import S from "./styles";

interface ICategory {
  title: string;
  icon: any;
}

const Category: FC<ICategory> = ({ title, icon }): ReactElement => {
  return (
    <S.Container onPress={() => Alert.alert(title)}>
      <S.SectionIcon>
        <Image source={icon} style={{ width: 25, height: 25 }} />
      </S.SectionIcon>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Category;
