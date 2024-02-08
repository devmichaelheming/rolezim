import "./ReactotronConfig";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import "react-native-gesture-handler";
import "moment/locale/pt-br";
import useAuthStore from "~/stores/useAuthStore";
import useEventStore from "~/stores/useEventStore";

export default function App() {
  const { loadFromStorageAuth } = useAuthStore();
  const { loadFromStorageFavorite } = useEventStore();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await loadFromStorageAuth();
        await loadFromStorageFavorite();
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, []);

  if (!fontsLoaded || !appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
