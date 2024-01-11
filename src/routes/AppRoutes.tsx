import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Settings from "../screens/Settings";
import Home from "../screens/Home";
import Favorite from "../screens/Favorite";
import theme from "~/styles/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventDetail from "~/components/Entidades/EventDetail";

const AppRoutes = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="EventDetail" component={EventDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.primary,
          height: 70,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon({ focused, size, color }) {
            if (focused) {
              return <Ionicons size={26} color="#FFF" name="home" style={{ marginTop: 15 }} />;
            }

            return (
              <Ionicons size={size} color="#FFF" name="home-outline" style={{ marginTop: 15 }} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon({ focused, size, color }) {
            if (focused) {
              return <Ionicons size={26} color="#FFF" name="heart" style={{ marginTop: 15 }} />;
            }

            return (
              <Ionicons size={size} color="#FFF" name="heart-outline" style={{ marginTop: 15 }} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon({ focused, size, color }) {
            if (focused) {
              return <FontAwesome size={32} color="#FFF" name="user" style={{ marginTop: 15 }} />;
            }

            return <FontAwesome size={30} color="#FFF" name="user-o" style={{ marginTop: 15 }} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
