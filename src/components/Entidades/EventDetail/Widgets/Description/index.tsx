import React, { FC, ReactElement } from "react";

import S from "./styles";

interface DescriptionProps {
  description: string;
}

const Description: FC<DescriptionProps> = ({ description }): ReactElement => {
  return (
    <S.InfoDescription>
      <S.TitleDescription>Descrição do evento</S.TitleDescription>
      <S.TextDescription>{description}</S.TextDescription>
    </S.InfoDescription>
  );
};

export default Description;
