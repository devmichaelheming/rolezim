import styled from "styled-components";
import { View, TouchableOpacity, Text } from "react-native";
import theme from "~/styles/theme";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${theme.primary};
  height: 55px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  margin-top: 20px;
`;

export const TextButton = styled(Text)`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

export default {
  Container,
  Button,
  TextButton,
};
