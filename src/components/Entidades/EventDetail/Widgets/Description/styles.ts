import { Text, View } from "react-native";
import styled from "styled-components";

export const InfoDescription = styled(View)``;

export const TitleDescription = styled(Text)`
  font-family: "Inter_500Medium";
  text-align: left;
  font-size: 18px;
  padding-bottom: 8px;
`;

export const TextDescription = styled(Text)`
  font-family: "Inter_400Regular";
  text-align: justify;
  color: #3f3f3f;
`;

export default {
  InfoDescription,
  TitleDescription,
  TextDescription,
};
