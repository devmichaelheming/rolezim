import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import theme from "~/styles/theme";

interface SectionIconProps {
  selected: boolean;
}

export const Container = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 8px;
`;

export const SectionIcon = styled(View)<SectionIconProps>`
  width: 55px;
  height: 55px;
  border: ${({ selected }) => (selected ? "2px" : "0.5px")} solid ${theme.primary};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)<SectionIconProps>`
  font-size: 14px;
  font-weight: 600;
  color: ${({ selected }) => (selected ? theme.primary : "#545454")};
  text-align: center;
`;

export default {
  Container,
  SectionIcon,
  Title,
};
