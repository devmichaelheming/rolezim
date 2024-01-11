import React, { FC, ReactElement } from "react";
import { Image, Alert } from "react-native";
import { ICategory } from "../../Models";

import S from "./styles";

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
