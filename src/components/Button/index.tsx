import React, { ReactNode } from "react";
import S from "./styles";
import { TouchableOpacityProps } from "react-native";

interface IButton extends TouchableOpacityProps {
  type?: "default" | "text";
  onPress: () => void;
  children: ReactNode;
  size?: number;
}

const Button = ({ type = "default", onPress, children, size = 18, ...rest }: IButton) => {
  return (
    <S.Button type={type} onPress={onPress} {...rest}>
      <S.TextButton type={type} size={size}>
        {children}
      </S.TextButton>
    </S.Button>
  );
};

export default Button;
