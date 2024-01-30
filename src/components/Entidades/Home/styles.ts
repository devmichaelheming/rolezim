import styled from "styled-components";
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Dimensions } from "react-native";
import theme from "~/styles/theme";

export const Container = styled(View)`
  width: 95%;
  top: ${Dimensions.get("window").height * 0.1}px;
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
`;

export const TextButton = styled(Text)`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

export const Header = styled(View)`
  width: 100%;
  height: 190px;
  position: fixed;
  top: 0px;
  z-index: 2;
`;

export const Body = styled(View)`
  margin-bottom: 280px;
`;

export const SectionSearch = styled(View)`
  width: 100%;
  margin-top: 20px;
  flex-direction: row-reverse;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputSearch = styled(TextInput)`
  width: 80%;
  height: 42px;
  border-radius: 6px;
  padding: 10px 8px;
  border-width: 1px;
  border-color: #ccc;
  color: #000;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const ButtonSearch = styled(TouchableOpacity)`
  width: 20%;
  height: 42px;
  background-color: ${theme.primary};
  border-width: 1px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

export const SectionCategory = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
`;

export const TitleSection = styled(Text)`
  color: ${theme.primary};
  font-size: 18px;
  font-weight: 500;
  width: 95%;
  display: flex;
  justify-content: flex-start;
  padding-left: 6px;
  padding-bottom: 10px;
`;

export const BodySection = styled(FlatList).attrs({
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 24,
  },
})`
  width: 100%;
`;

export const ContainerSection = styled(View)`
  width: 100%;
  flex-grow: 1;
`;

export const BodyItemSection = styled(View)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default {
  Container,
  Button,
  TextButton,
  Header,
  SectionSearch,
  InputSearch,
  ButtonSearch,
  SectionCategory,
  TitleSection,
  BodySection,
  ContainerSection,
  BodyItemSection,
  Body,
};
