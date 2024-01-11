import { Dimensions, View } from "react-native";
import styled from "styled-components";
import theme from "~/styles/theme";

export const StatusBar = styled(View)`
  padding-top: ${Dimensions.get("window").height * 0.07}px;
  width: 100%;
  position: fixed;
  top: 0px;
  background-color: ${theme.primary};
  display: flex;
  align-items: center;
`;

export default {
  StatusBar,
};
