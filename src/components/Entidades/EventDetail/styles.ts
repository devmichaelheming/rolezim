import { ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(ScrollView)``;

export const InfoEvent = styled(View)`
  padding: 10px;
`;

export const TitleEvent = styled(Text)`
  font-size: 32px;
  font-weight: 500;
  font-family: "Inter_500Medium";
  color: #3e3e3e;
  text-align: left;
  padding-top: 10px;
`;

export const TitleHeader = styled(Text)`
  color: #ffffffd5;
  font-weight: 500;
  font-size: 16px;
`;

export const ListLotes = styled(View)`
  padding: 20px 0 0px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
`;

export const SectionTotal = styled(View)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const TitleTotal = styled(Text)`
  font-size: 16px;
`;

export const ValueTotal = styled(Text)`
  font-size: 20px;
  font-weight: 500;
`;
export const SectionBuy = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const ButtonBuy = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background-color: #5900c5;
  align-items: center;
  justify-content: center;
`;

export const TextBuy = styled(Text)`
  font-size: 18px;
  font-weight: 500;
  color: #ededed;
`;

export default {
  Container,
  InfoEvent,
  TitleEvent,
  TitleHeader,
  ListLotes,
  SectionTotal,
  TitleTotal,
  ValueTotal,
  SectionBuy,
  ButtonBuy,
  TextBuy,
};
