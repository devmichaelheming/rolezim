import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const SectionLotes = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 6px;
  padding: 8px;
`;

export const TitleLote = styled(Text)``;

export const InfoLote = styled(View)``;

export const ValueLote = styled(Text)`
  padding-top: 10px;
`;

export const DescriptionLote = styled(Text)`
  padding-top: 20px;
  font-size: 12px;
`;

export const Quantity = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
`;

export const ButtonCount = styled(TouchableOpacity)`
  height: 25px;
  width: 25px;
  align-items: center;
  justify-content: center;
`;

export default {
  SectionLotes,
  TitleLote,
  InfoLote,
  ValueLote,
  DescriptionLote,
  Quantity,
  ButtonCount,
};
