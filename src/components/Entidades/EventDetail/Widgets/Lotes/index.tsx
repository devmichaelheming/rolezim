import React, { FC, ReactElement, useState } from "react";
import { LoteProps } from "~/Models";

import S from "./styles";
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { formatandoMoeda } from "../../../../../utils/funcoes";

interface ILotesComponent extends LoteProps {
  updateLoteCount: (idEvent: string, titleLote: string, count: number) => void;
}

const Lotes: FC<ILotesComponent> = ({ id, title, value, updateLoteCount }): ReactElement => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
    updateLoteCount(id, title, 1);
  };

  const decrementCounter = () => {
    if (count > 0) {
      setCount(count - 1);
      updateLoteCount(id, title, -1);
    }
  };

  return (
    <S.SectionLotes>
      <S.InfoLote>
        <S.TitleLote>{title}</S.TitleLote>

        <S.ValueLote>{formatandoMoeda(value)}</S.ValueLote>

        <S.DescriptionLote>em até 12x sem juros</S.DescriptionLote>
      </S.InfoLote>

      <S.Quantity>
        <S.ButtonCount onPress={decrementCounter}>
          <AntDesign name="minus" size={18} color="black" />
        </S.ButtonCount>

        <Text style={{ fontSize: 16, fontWeight: "600" }}>{count}</Text>

        <S.ButtonCount onPress={incrementCounter}>
          <AntDesign name="plus" size={18} color="black" />
        </S.ButtonCount>
      </S.Quantity>
    </S.SectionLotes>
  );
};

export default Lotes;
