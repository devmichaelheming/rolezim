import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(TouchableOpacity)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const SectionIcon = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 6px;
`;

export const TitleData = styled(Text)`
  font-size: 9px;
  font-weight: 600;
  color: #545454;
  text-align: center;
`;

export const TitleLocation = styled(Text)`
  font-size: 9px;
  font-weight: 500;
  color: #262626;
  text-align: center;
`;

export const Title = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: #262626;
  padding-bottom: 4px;
  width: 100%;
  text-align: center;
`;

export default {
  Container,
  SectionIcon,
  Footer,
  TitleData,
  TitleLocation,
  Title,
};
