import styled from "styled-components";
import { View, TouchableOpacity, Text } from "react-native";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(TouchableOpacity)`
  background-color: #5900c5;
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
