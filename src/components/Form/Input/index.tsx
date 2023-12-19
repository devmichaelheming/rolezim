import React, { FC, ReactElement } from "react";

import S from "./styles";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  errorText?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  errorText = "",
  ...rest
}): ReactElement => {
  return (
    <S.Container>
      <S.Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        error={errorText !== ""}
        {...rest}
      />
      {errorText !== "" && <S.ErrorText>{errorText}</S.ErrorText>}
    </S.Container>
  );
};

export default Input;
