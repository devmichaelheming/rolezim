import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";
import theme from "~/styles/theme";

export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const Header = styled(View)`
  width: 100%;
  height: 100px;
  background-color: #e8e8e8;
  border-bottom-width: 0.5px;
  border-color: #c6c6c6;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
  flex-direction: row;
  column-gap: 14px;
  margin-bottom: 10px;
`;

export const Body = styled(View)`
  width: 98%;
`;

export const SectionList = styled(View)`
  flex-direction: column;
  row-gap: 28px;
  padding-top: 18px;
  padding-left: 6px;
`;

export const TextSection = styled(Text)`
  color: ${theme.primary};
  font-family: "Inter_500Medium";
  font-size: 16px;
`;

export const TextEmail = styled(Text)`
  font-family: "Inter_400Regular";
  color: #3f3f3f;
  font-size: 18px;
`;

export const IconUser = styled(View)`
  width: 60px;
  height: 60px;
  border-width: 0.5px;
  border-color: #989898;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled(View)`
  width: 98%;
  position: absolute;
  bottom: 10px;
  align-items: center;
  justify-content: center;
`;

export const VersionApp = styled(Text)`
  padding-top: 6px;
`;

export const SectionSocialMedia = styled(View)`
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
`;

export const GroupSocialMedia = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TextSocialMedia = styled(Text)`
  padding-bottom: 12px;
  font-size: 16px;
  font-family: "Inter_500Medium";
  color: #262626;
`;

export const ItemList = styled(TouchableOpacity)`
  flex-direction: row;
  column-gap: 6px;
`;

export default {
  Container,
  Header,
  Body,
  SectionList,
  TextSection,
  TextEmail,
  IconUser,
  Footer,
  VersionApp,
  SectionSocialMedia,
  GroupSocialMedia,
  TextSocialMedia,
  ItemList,
};
