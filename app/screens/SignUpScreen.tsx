import Button from "@/components/button";
import CredInput from "@/components/credInput";
import SignInView from "@/components/views/signInView";
import { SignUpScreenPropsType, UseStateType } from "@/consts/Types";
import { useState } from "react";
import { StyleSheet } from "react-native";

const SignUpScreen = ({ navigation }: SignUpScreenPropsType) => {
  const [clearInput, setClearInput]: UseStateType<boolean> = useState(false);
  const clearAllInputs = () => setClearInput(clearInput ? false : true);

  return (
    <SignInView>
      <CredInput title="Username"></CredInput>
      <CredInput title="Password" secureText={true}></CredInput>
      <CredInput title="Validate Password" secureText={true}></CredInput>
      <Button title="Sign Up" width={150} height={50} fontSize={20} />
    </SignInView>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
