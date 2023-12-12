import styled from "styled-components/native";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface IButton extends TouchableOpacityProps {
  type: "default" | "text";
  size?: number;
}

export const Button = styled(TouchableOpacity)<IButton>`
  width: 100%;
  background-color: ${({ type }) => (type === "default" ? "#5900c5" : "transparent")};
  border-width: 1px;
  border-color: ${({ type }) => (type === "default" ? "#5900c5" : "transparent")};
  height: 55px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const TextButton = styled(Text)<IButton>`
  color: ${({ type }) => (type === "default" ? "#FFF" : "#5900c5")};
  font-size: ${({ size }) => `${size}px`};
  font-weight: 600;
`;

export default {
  Button,
  TextButton,
};
