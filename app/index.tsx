import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import LoginScreen from "./screens/LoginScreen";
import { RootStackParamList } from "@/consts/Types";
import SignUpScreen from "./screens/SignUpScreen";
import { Asset } from "expo-asset";
import MainScreen from "./screens/MainScreen";

const imagesToPrefetch = [require("@/assets/images/starbucks-logo-loading-gif.gif")];

const Stack = createNativeStackNavigator<RootStackParamList>();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isLoad] = useFonts({
    SantanaBlack: require("@/assets/fonts/Santana-Black.ttf"),
    Santana: require("@/assets/fonts/Santana.ttf"),
  });

  useEffect(() => {
    Asset.loadAsync(imagesToPrefetch);
    if (isLoad) SplashScreen.hideAsync();
  }, [isLoad]);

  if (!isLoad) return null;

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootLayout;
