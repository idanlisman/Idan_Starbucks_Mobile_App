import { Dispatch, SetStateAction } from "react";
import { TextInputChangeEventData, NativeSyntheticEvent, GestureResponderEvent } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Types

export type UseStateSetType<T> = Dispatch<SetStateAction<T>>;
export type UseStateType<T> = [T, UseStateSetType<T>];
export type OnChangeTextType = NativeSyntheticEvent<TextInputChangeEventData>;
export type OnPressType = (event: GestureResponderEvent) => void;
export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};
export type LoginScreenPropsType = NativeStackScreenProps<RootStackParamList, "Login">;
export type SignUpScreenPropsType = NativeStackScreenProps<RootStackParamList, "SignUp">;
export type MainScreenPropsType = NativeStackScreenProps<RootStackParamList, "Main">;
