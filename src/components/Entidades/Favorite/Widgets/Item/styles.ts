import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 20px;
  column-gap: 16px;
`;

export const SectionIcon = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Body = styled(View)`
  height: 100%;
  width: 65%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 6px;
`;

export const TitleData = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  color: #545454;
`;

export const TitleLocation = styled(Text)`
  font-size: 12px;
  font-weight: 600;
  color: #262626;
  max-width: 200px;
  flex-wrap: wrap;
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: #262626;
  padding-bottom: 4px;
`;

export const Details = styled(TouchableOpacity)`
  flex-direction: column;
`;

export const RemoveItem = styled(TouchableOpacity)``;

export default {
  Container,
  SectionIcon,
  Body,
  TitleData,
  TitleLocation,
  Title,
  Details,
  RemoveItem,
};
