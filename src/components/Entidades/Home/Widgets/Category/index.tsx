import React, { Dispatch, FC, ReactElement, SetStateAction } from "react";
import { ICategory } from "../../Models";

import S from "./styles";
import Image from "~/components/Image";

interface ICategoryComponent extends ICategory {
  setCategorySelected: Dispatch<SetStateAction<string>>;
  categorySelected: string;
}

const Category: FC<ICategoryComponent> = ({
  title,
  icon,
  setCategorySelected,
  value,
  categorySelected,
}): ReactElement => {
  return (
    <S.Container onPress={() => setCategorySelected(value)}>
      <S.SectionIcon selected={value === categorySelected}>
        <Image source={icon} style={{ width: 25, height: 25 }} />
      </S.SectionIcon>

      <S.Title selected={value === categorySelected}>{title}</S.Title>
    </S.Container>
  );
};

export default Category;
