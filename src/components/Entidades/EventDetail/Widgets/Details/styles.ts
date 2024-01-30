import { Text, View } from "react-native";
import styled from "styled-components";

export const InfoDetails = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  column-gap: 16px;
  padding: 10px 0 5px 0;
`;

export const InfoDetailsItem = styled(View)`
  flex-direction: row;
  column-gap: 8px;
`;

export const InfoLocation = styled(Text)`
  font-family: "Inter_500Medium";
  color: #3f3f3f;
`;

export const InfoDate = styled(Text)`
  font-family: "Inter_500Medium";
  color: #3f3f3f;
`;

export default {
  InfoDetails,
  InfoDetailsItem,
  InfoLocation,
  InfoDate,
};
