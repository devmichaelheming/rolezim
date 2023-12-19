import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const AuthRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignIn}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
