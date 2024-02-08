import styled, { css } from "styled-components/native";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
interface IButton extends TouchableOpacityProps {
  type: "text" | "primary" | "secondary";
  size?: number;
  revert?: boolean;
}

import theme from "~/styles/theme";

export const Button = styled(TouchableOpacity)<IButton>`
  width: 100%;

  ${({ type }) =>
    type === "text" &&
    css`
      background-color: transparent;
      border-color: transparent;
    `};

  ${({ type }) =>
    type === "primary" &&
    css`
      background-color: ${theme.primary};
      border-color: ${theme.primary};
    `};

  ${({ type }) =>
    type === "secondary" &&
    css`
      background-color: transparent;
      border-color: ${theme.primary};
    `};

  border-width: 1px;
  height: 55px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const TextButton = styled(Text)<IButton>`
  color: ${({ type }) => (type === "primary" && "secondary" ? "#FFF" : theme.primary)};
  font-size: ${({ size }) => `${size}px`};
  font-weight: 600;
`;

export default {
  Button,
  TextButton,
};
