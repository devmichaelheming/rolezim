import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import useAuthStore from "../lib/stores/useAuthStore";

const routes = () => {
  const { user } = useAuthStore();

  return <NavigationContainer>{user ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>;
};

export default routes;
