import styled from "styled-components";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

export const Button = styled(TouchableOpacity)`
  background-color: #5900c5;
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
  position: absolute;
  top: 60px;
`;

export const SectionLogo = styled(View)`
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(Image)`
  width: 130px;
  height: 50px;
`;

export const SectionSearch = styled(View)`
  width: 100%;
  margin-top: 20px;
  flex-direction: row-reverse;
  /* justify-content: space-between; */
`;

export const InputSearch = styled(TextInput)`
  width: 75%;
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
  background-color: #5900c5;
  border-width: 1px;
  height: 55px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`;

export default {
  Container,
  Button,
  TextButton,
  Header,
  SectionLogo,
  Logo,
  SectionSearch,
  InputSearch,
  ButtonSearch,
};
