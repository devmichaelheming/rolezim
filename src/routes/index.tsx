import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import useAuthStore from "~/stores/useAuthStore";
import S from "./styles";
import { StatusBar } from "expo-status-bar";

const routes = () => {
  const { user } = useAuthStore();

  return (
    <NavigationContainer>
      {user ? (
        <>
          <StatusBar style="light" />

          <S.StatusBar />

          <AppRoutes />
        </>
      ) : (
        <>
          <StatusBar style="dark" />

          <AuthRoutes />
        </>
      )}
    </NavigationContainer>
  );
};

export default routes;
