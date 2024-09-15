import LockIcon from "@/assets/icons/lockIcon";
import UserIcon from "@/assets/icons/userIcon";
import Button from "@/components/button";
import CredInput from "@/components/credInput";
import SignInView from "@/components/views/signInView";
import Consts from "@/consts/Consts";
import { LoginScreenPropsType, RootStackParamList, UseStateType } from "@/consts/Types";
import network from "@/utils/network";
import { navigationHandler } from "@/utils/utils";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import LoadingScreen from "./LoadingScreen";
import { AxiosResponse } from "axios";
import * as SecureStore from "expo-secure-store";
import storage from "@/utils/storage";

const LoginScreen = ({ navigation }: LoginScreenPropsType) => {
  const [username, setUsername]: UseStateType<string> = useState("");
  const [password, setPassword]: UseStateType<string> = useState("");
  const [clearInput, setClearInput]: UseStateType<boolean> = useState(false);
  const [isLoading, setIsLoading]: UseStateType<boolean> = useState(false);

  const clearAllInputs = () => setClearInput(clearInput ? false : true);

  const onPressLoginHandler = async () => {
    const start: number = Date.now();
    // if (!(await isReqValid())) return;

    try {
      setIsLoading(true);
      const res: AxiosResponse = await network.post(`${Consts.AUTH_BACKEND_SERVER_URL}/${Consts.AUTH_BACKEND_SERVER_SIGN_IN_ROUTE}`, { username, password });
      const { token }: { token: string } = res.data;
      await storage.setToken(token);
      navigate(start, "Main");
    } catch (err) {
      setIsLoading(false);
      // navigate(start, "SignUp");
    } finally {
      clearAllInputs();
    }
  };

  // const isReqValid = (): boolean => {
  //   const isFieldsValid = username !== "" && password !== "";
  //   if (isFieldsValid)
  //   return true;
  // };

  // const isFieldsNotNull = (): boolean => {

  // }

  const navigate = (start: number, screen: keyof RootStackParamList): Promise<void> => navigationHandler(navigation.navigate, screen, start).finally(() => setIsLoading(false));
  const onPressSignUpHandler = () => navigation.navigate("SignUp");

  if (isLoading) return <LoadingScreen />;

  return (
    <SignInView>
      <View style={styles.inputsMainContainer}>
        <CredInput title="username" icon={<UserIcon />} clear={clearInput} warnings={["TODO"]} setValueProp={setUsername} />
        <CredInput title="passwords" icon={<LockIcon />} clear={clearInput} secureText={true} setValueProp={setPassword} />
      </View>
      <View>
        <Button title="Login" width={150} height={50} fontSize={20} onPress={onPressLoginHandler} />
        <Button title="Sign Up" width={150} height={50} fontSize={20} isDark={true} onPress={onPressSignUpHandler} />
      </View>
    </SignInView>
  );
};

const styles = StyleSheet.create({
  inputsMainContainer: {
    // paddingTop: 110,
  },
});

export default LoginScreen;
