import styled from "styled-components";
import { Text, TextInput, KeyboardAvoidingView, View } from "react-native";

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled(Text)`
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 12px;
`;

export const SubTitle = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 38px;
  color: #848484;
`;

export const TextButton = styled(Text)`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

export const SignUpSection = styled(View)`
  position: absolute;
  bottom: 30px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const DescriptionSignUp = styled(TextInput)`
  font-size: 16px;
`;

export default {
  Container,
  Title,
  SubTitle,
  TextButton,
  SignUpSection,
  DescriptionSignUp,
};
