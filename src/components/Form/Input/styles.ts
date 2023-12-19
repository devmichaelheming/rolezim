import { Text, TextInput, View } from "react-native";
import styled from "styled-components/native";

export interface Input {
  error?: boolean;
}

export const Container = styled(View)`
  margin-bottom: 26px;
  width: 100%;
`;

export const Input = styled(TextInput)<Input>`
  border-radius: 8px;
  border-color: ${({ error }) => (error ? "red" : "#c6c6c6")};
  padding: 10px 8px;
  border-bottom-width: 1px;
  color: #000;
`;

export const ErrorText = styled(Text)`
  font-size: 12px;
  color: red;
  padding-left: 12px;
  margin-top: 12px;
`;

export default {
  Container,
  Input,
  ErrorText,
};
