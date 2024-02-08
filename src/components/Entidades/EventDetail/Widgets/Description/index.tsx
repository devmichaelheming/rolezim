import React, { FC, ReactElement } from "react";

import S from "./styles";

interface IDescription {
  description: string;
}

const Description: FC<IDescription> = ({ description }): ReactElement => {
  return (
    <S.InfoDescription>
      <S.TitleDescription>Descrição do evento</S.TitleDescription>
      <S.TextDescription>{description}</S.TextDescription>
    </S.InfoDescription>
  );
};

export default Description;
