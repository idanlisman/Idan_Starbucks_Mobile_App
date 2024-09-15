import Button from "@/components/button";
import CredInput from "@/components/credInput";
import SignInView from "@/components/views/signInView";
import { RootStackParamList, SignUpScreenPropsType, UseStateType } from "@/consts/Types";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { StyleSheet } from "react-native";
import network from "@/utils/network";
import Consts from "@/consts/Consts";
import LoadingScreen from "./LoadingScreen";
import { navigationHandler } from "@/utils/utils";
import * as SecureStore from "expo-secure-store";
import CheckMarkIcon from "@/assets/icons/checkMarkIcon";
import CrossErrIcon from "@/assets/icons/crossErrIcon";
import { AxiosResponse } from "axios";
import storage from "@/utils/storage";

enum UsernameState {
  TRUE,
  FALSE,
  LOAD,
}

interface InputWarningIdsType {
  username?: string[];
  password?: string[];
  password2?: string[];
}

const SignUpScreen = ({ navigation }: SignUpScreenPropsType) => {
  const [clearInput, setClearInput]: UseStateType<boolean> = useState(false);
  const [username, setUsername]: UseStateType<string> = useState("");
  const [isUsernameExist, setIsUsernameExist]: UseStateType<number> = useState(UsernameState.LOAD);
  const [password, setPass]: UseStateType<string> = useState("");
  const [password2, setPass2]: UseStateType<string> = useState("");
  const [warnings, setWarnings]: UseStateType<InputWarningIdsType> = useState({});
  const [isLoading, setIsLoading]: UseStateType<boolean> = useState(false);

  const usernameCheckTimeoutRef: MutableRefObject<ReturnType<typeof setTimeout> | undefined> = useRef();

  useEffect(() => setWarnings({}), [username, password, password2]);
  useEffect(() => {
    setIsUsernameExist(UsernameState.LOAD);
    clearTimeout(usernameCheckTimeoutRef.current);
    if (username !== "") usernameCheckTimeoutRef.current = setTimeout(() => _isUsernameExist(), 400);
  }, [username]);

  const onSubmitHandler = async (): Promise<void> => {
    const start: number = Date.now();
    if (!isReqValid()) return;

    try {
      setIsLoading(true);
      const res: AxiosResponse = await network.post(`${Consts.AUTH_BACKEND_SERVER_URL}/${Consts.AUTH_BACKEND_SERVER_SIGN_UP_ROUTE}`, { username, password });
      const { token }: { token: string } = res.data;
      await storage.setToken(token);
      setClearInputsHandler();
      navigate(start, "Main");
    } catch (err) {
      navigate(start, "SignUp");
    }
  };

  const isReqValid = (): boolean => {
    const invalidWarning: InputWarningIdsType = {
      username: [],
      password: [],
      password2: [],
    };
    const isPasswordValid: boolean = _isPasswordRegexValid();
    const isPassword2Valid: boolean = _isPasswordsMatch();
    if (!isPasswordValid) invalidWarning.password = ["Password Is Invalid"];
    if (!isPassword2Valid) invalidWarning.password2 = ["Passwords Do Not Match"];
    if (isUsernameExist === UsernameState.TRUE) invalidWarning.username = ["Username Already Exists"];
    if (isUsernameExist === UsernameState.FALSE && isPasswordValid && isPassword2Valid) return true;
    else setWarnings(invalidWarning);

    return false;
  };

  const _isPasswordsMatch = (): boolean => password === password2;

  const _isPasswordRegexValid = (): boolean => {
    const regex = /^.+$/;
    return regex.test(password);
  };

  const _isUsernameExist = async (): Promise<void> => {
    try {
      await network.post(`${Consts.AUTH_BACKEND_SERVER_URL}/${Consts.AUTH_BACKEND_SERVER_USERNAME_VALIDATION_ROUTE}`, { username });
      setIsUsernameExist(UsernameState.FALSE);
    } catch (err: any) {
      if (err.status) setIsUsernameExist(UsernameState.TRUE);
      else throw err;
    }
  };

  const setClearInputsHandler = (): void => setClearInput(clearInput ? false : true);
  const navigate = (start: number, screen: keyof RootStackParamList): Promise<void> => navigationHandler(navigation.navigate, screen, start).finally(() => setIsLoading(false));

  if (isLoading) return <LoadingScreen />;

  return (
    <SignInView>
      <CredInput title="Username" setValueProp={setUsername} warnings={warnings["username"]} icon={isUsernameExist === UsernameState.LOAD ? null : isUsernameExist === UsernameState.FALSE ? <CheckMarkIcon /> : <CrossErrIcon />} />
      <CredInput title="Password" secureText={true} setValueProp={setPass} warnings={warnings["password"]} />
      <CredInput title="Validate Password" secureText={true} setValueProp={setPass2} warnings={warnings["password2"]} />
      <Button title="Sign Up" width={150} height={50} fontSize={20} onPress={onSubmitHandler} />
    </SignInView>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
