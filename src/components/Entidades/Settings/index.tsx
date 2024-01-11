import React from "react";
import { Text } from "react-native";

import S from "./styles";
import useAuthStore from "../../../lib/stores/useAuthStore";

const Home = () => {
  const { signOut } = useAuthStore();

  return (
    <S.Container>
      <Text>Settings</Text>

      <S.Button onPress={signOut}>
        <S.TextButton>Sair do App</S.TextButton>
      </S.Button>
    </S.Container>
  );
};

export default Home;
