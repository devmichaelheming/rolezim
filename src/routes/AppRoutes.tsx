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
import { useIsFocused } from "@react-navigation/native";
import { Platform } from "react-native";

const AppRoutes = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const isFocused = useIsFocused();

  const HomeStack = ({ route }: any) => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#5900c5",
          },
          headerTitleStyle: {
            color: "#FFF",
          },
          headerTintColor: "#FFF",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EventDetail"
          component={EventDetail}
          options={{ title: "Detalhes do evento" }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.primary,
          height: Platform.OS === "ios" ? 70 : 60,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarVisible: !isFocused, // Oculta a barra quando estiver na tela EventDetail
          tabBarIcon({ focused, size, color }) {
            if (focused) {
              return (
                <Ionicons
                  size={26}
                  color="#FFF"
                  name="home"
                  style={{ marginTop: Platform.OS === "ios" ? 15 : 0 }}
                />
              );
            }

            return (
              <Ionicons
                size={size}
                color="#FFF"
                name="home-outline"
                style={{ marginTop: Platform.OS === "ios" ? 15 : 0 }}
              />
            );
          },
        })}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon({ focused, size, color }) {
            if (focused) {
              return (
                <Ionicons
                  size={26}
                  color="#FFF"
                  name="heart"
                  style={{ marginTop: Platform.OS === "ios" ? 15 : 0 }}
                />
              );
            }

            return (
              <Ionicons
                size={size}
                color="#FFF"
                name="heart-outline"
                style={{ marginTop: Platform.OS === "ios" ? 15 : 0 }}
              />
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
              return (
                <FontAwesome
                  size={32}
                  color="#FFF"
                  name="user"
                  style={{ marginTop: Platform.OS === "ios" ? 15 : 0 }}
                />
              );
            }

            return (
              <FontAwesome
                size={30}
                color="#FFF"
                name="user-o"
                style={{ marginTop: Platform.OS === "ios" ? 15 : 0 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
