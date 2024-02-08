import React, { FC, ReactElement, useEffect, useState } from "react";

import S from "./styles";
import { ItemProps } from "~/Models";
import { calculateTimeRemaining } from "../../_funcoes";

interface ITimer {
  data: ItemProps;
}

const Timer: FC<ITimer> = ({ data }): ReactElement => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(data.date || ""));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(data.date || ""));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [data.date]);

  return (
    <S.SectionTimer>
      <S.ItemTime>
        <S.Time>
          <S.TimeText>{timeRemaining.days}</S.TimeText>
        </S.Time>
        <S.ItemTimeText>Dias</S.ItemTimeText>
      </S.ItemTime>

      <S.ItemTime>
        <S.Time>
          <S.TimeText>{timeRemaining.hours}</S.TimeText>
        </S.Time>
        <S.ItemTimeText>Horas</S.ItemTimeText>
      </S.ItemTime>

      <S.ItemTime>
        <S.Time>
          <S.TimeText>{timeRemaining.minutes}</S.TimeText>
        </S.Time>
        <S.ItemTimeText>Minutos</S.ItemTimeText>
      </S.ItemTime>

      <S.ItemTime>
        <S.Time>
          <S.TimeText>{timeRemaining.seconds}</S.TimeText>
        </S.Time>
        <S.ItemTimeText>Segundos</S.ItemTimeText>
      </S.ItemTime>
    </S.SectionTimer>
  );
};

export default Timer;
