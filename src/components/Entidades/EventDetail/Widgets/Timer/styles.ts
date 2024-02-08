import { Text, View } from "react-native";
import styled from "styled-components";

export const SectionTimer = styled(View)`
  align-items: center;
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextTimeRemaining = styled(Text)`
  font-family: "Inter_600SemiBold";
  color: #262626;
  font-size: 18px;
  text-align: center;
`;

export const ItemTime = styled(View)`
  flex-direction: column;
  align-items: center;
  row-gap: 6px;
`;

export const Time = styled(View)`
  background-color: #5900c5;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const TimeText = styled(Text)`
  color: #fff;
  font-size: 18px;
  font-family: "Inter_500Medium";
`;

export const ItemTimeText = styled(Text)`
  color: #262626;
  font-size: 13px;
  font-family: "Inter_500Medium";
`;

export default {
  SectionTimer,
  TextTimeRemaining,
  ItemTime,
  Time,
  TimeText,
  ItemTimeText,
};
