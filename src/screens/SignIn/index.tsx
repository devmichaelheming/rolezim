import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import Button from "~/components/Button";
import useAuthStore from "../../lib/stores/useAuthStore";

import S from "./styles";
import Input from "~/components/Form/Input";

const SignIn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { signIn } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const validateInputs = () => {
    let emailError = "";
    let passwordError = "";

    if (!email.trim()) {
      emailError = "O E-mail é obrigatório.";
    }

    if (!password.trim()) {
      passwordError = "A Senha é obrigatória.";
    }

    return { email: emailError, password: passwordError };
  };

  const handleSignIn = async () => {
    const { email: emailError, password: passwordError } = validateInputs();

    setError({ email: emailError, password: passwordError });

    if (emailError || passwordError) {
      return;
    }

    const auth = await signIn(email, password);

    if (auth) {
      navigation.navigate("Home");
    }
  };

  const handleSignUp = async () => {
    navigation.navigate("SignUp");
  };

  const clearError = (field: string) => {
    setError((prevError) => ({ ...prevError, [field]: "" }));
  };

  useEffect(() => {
    if (email.length > 0) {
      clearError("email");
    }

    if (password.length > 0) {
      clearError("password");
    }
  }, [email, password]);

  return (
    <S.Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <S.Title>Bem-vindo de Volta!</S.Title>
      <S.SubTitle>Por favor, faça o login para acessar sua conta.</S.SubTitle>

      <Input
        selectTextOnFocus
        placeholder="E-mail"
        value={email}
        onChangeText={(newValue: string) => {
          setEmail(newValue);
        }}
        errorText={error.email}
      />

      <Input
        secureTextEntry
        selectTextOnFocus
        placeholder="Senha"
        value={password}
        onChangeText={(newValue: string) => {
          setPassword(newValue);
        }}
        errorText={error.password}
      />

      <Button onPress={() => handleSignIn()} style={{ marginTop: 10 }}>
        Entrar no App
      </Button>

      <S.SignUpSection>
        <S.DescriptionSignUp>Ainda não tem uma conta?</S.DescriptionSignUp>
        <Button
          type="text"
          onPress={() => handleSignUp()}
          style={{ width: "auto", paddingLeft: 4 }}
          size={16}
        >
          Criar conta
        </Button>
      </S.SignUpSection>
    </S.Container>
  );
};

export default SignIn;
