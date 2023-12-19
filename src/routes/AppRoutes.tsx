import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";

const AppRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Settings"
        component={Settings}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
