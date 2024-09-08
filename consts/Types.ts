import { Dispatch, SetStateAction } from "react";
import { TextInputChangeEventData, NativeSyntheticEvent, GestureResponderEvent } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type UseStateType<T> = [T, Dispatch<SetStateAction<T>>];
export type OnChangeTextType = NativeSyntheticEvent<TextInputChangeEventData>;
export type OnPressType = (event: GestureResponderEvent) => void;
export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};
export type LoginScreenPropsType = NativeStackScreenProps<RootStackParamList, "Login">;
export type SignUpScreenPropsType = NativeStackScreenProps<RootStackParamList, "SignUp">;
