import { FlatList, Text, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  width: 100%;
`;

export const ListFavorite = styled(FlatList)`
  width: 100%;
  flex: 1;
`;

export const ContainerListFavorite = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const TextNotFound = styled(Text)`
  padding-top: 40px;
  color: #7c7c7c;
  font-size: 16px;
`;

export default {
  Container,
  ListFavorite,
  ContainerListFavorite,
  TextNotFound,
};
