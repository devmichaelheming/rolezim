import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 8px;
`;

export const SectionIcon = styled(View)`
  width: 55px;
  height: 55px;
  border: 0.5px solid #5900c5;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  color: #545454;
  text-align: center;
`;

export default {
  Container,
  SectionIcon,
  Title,
};
