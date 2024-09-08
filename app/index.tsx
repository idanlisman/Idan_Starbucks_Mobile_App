import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import LoginScreen from "./screens/LoginScreen";
import { RootStackParamList } from "@/consts/Types";
import SignUpScreen from "./screens/SignUpScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isLoad] = useFonts({
    SantanaBlack: require("@/assets/fonts/Santana-Black.ttf"),
    Santana: require("@/assets/fonts/Santana.ttf"),
  });

  useEffect(() => {
    if (isLoad) {
      SplashScreen.hideAsync();
    }
  }, [isLoad]);

  if (!isLoad) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RootLayout;
