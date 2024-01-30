import "./ReactotronConfig";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  SplashScreen.preventAutoHideAsync();

  const onFontsLoaded = async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  onFontsLoaded();

  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
