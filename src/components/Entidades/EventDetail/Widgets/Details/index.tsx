import React, { FC, ReactElement } from "react";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { convertDate } from "../../../../../utils/funcoes";
import { ItemProps } from "~/Models";

import S from "./styles";

interface DetailsProps {
  data: ItemProps;
}

const Details: FC<DetailsProps> = ({ data }): ReactElement => {
  return (
    <S.InfoDetails>
      {data.location && (
        <S.InfoDetailsItem>
          <Entypo name="location" size={18} color="black" />
          <S.InfoDate>{data.location}</S.InfoDate>
        </S.InfoDetailsItem>
      )}

      {data.date && (
        <S.InfoDetailsItem>
          <Fontisto name="date" size={18} color="black" />
          <S.InfoLocation>{convertDate(data.date)}</S.InfoLocation>
        </S.InfoDetailsItem>
      )}
    </S.InfoDetails>
  );
};

export default Details;
