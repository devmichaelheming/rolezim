import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Platform, View } from "react-native";
import Button from "~/components/Button";
import useAuthStore from "~/stores/useAuthStore";

import S from "./styles";
import Input from "~/components/Form/Input";

const SignIn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { signUp } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSignUp = async () => {
    setIsLoading(true);
    const { email: emailError, password: passwordError } = validateInputs();

    setError({ email: emailError, password: passwordError });

    if (emailError || passwordError) {
      return;
    }

    const auth = await signUp(email, password);

    if (auth) {
      Alert.alert("Conta criada com sucesso!");

      navigation.navigate("SignIn");
      setIsLoading(false);
    }
  };

  const handleSignIn = async () => {
    navigation.navigate("SignIn");
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
      <View>
        <S.Title>Criar conta</S.Title>
        <S.SubTitle>
          Seja bem-vindo! Complete as informações abaixo para criar sua conta.
        </S.SubTitle>
      </View>

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

      <Button onPress={() => handleSignUp()} style={{ marginTop: 10 }}>
        {isLoading ? <ActivityIndicator size="small" /> : "Cadastrar"}
      </Button>

      <S.SignInSection>
        <S.DescriptionSignIn>Já possui uma conta?</S.DescriptionSignIn>
        <Button
          type="text"
          onPress={() => handleSignIn()}
          style={{ width: "auto", paddingLeft: 4 }}
          size={16}
        >
          Entrar
        </Button>
      </S.SignInSection>
    </S.Container>
  );
};

export default SignIn;
