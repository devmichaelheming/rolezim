import styled from "styled-components";
import { View, TouchableOpacity, Text, Dimensions, FlatList } from "react-native";
import theme from "~/styles/theme";

export const Container = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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

export const Header = styled(View)`
  padding-top: ${Dimensions.get("window").height * 0.04}px;
  padding-bottom: 10px;
  width: 100%;
  position: fixed;
  top: 0px;
  background-color: ${theme.primary};
  display: flex;
  align-items: center;

  /* padding-top: ${Dimensions.get("window").height * 0.002}px;
  width: 100%;
  position: fixed;
  top: 0px;
  background-color: ${theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  flex-direction: row; */
`;

export const TitleHeader = styled(Text)`
  color: #ffffffe1;
  font-weight: 600;
  font-size: 16px;
`;

export const ContainerListFavorite = styled(View)`
  width: 100%;
  background-color: #fff;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const ListFavorite = styled(FlatList)`
  width: 100%;
  flex: 1;
  padding: 16px;
`;

export const ItemListFavorite = styled(View)``;

export const ListEmpty = styled(View)`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: ${Dimensions.get("window").height * 0.4}px;
`;

export const TitleEmpty = styled(Text)`
  width: 100%;
  text-align: center;
  padding-top: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #262626;
`;

export const SubTitleEmpty = styled(Text)`
  width: 100%;
  text-align: center;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #262626;
`;

export default {
  Container,
  Button,
  TextButton,
  Header,
  TitleHeader,
  ContainerListFavorite,
  ListFavorite,
  ItemListFavorite,
  ListEmpty,
  TitleEmpty,
  SubTitleEmpty,
};
