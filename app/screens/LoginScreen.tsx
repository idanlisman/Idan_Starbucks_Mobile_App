import LockIcon from "@/assets/icons/lockIcon";
import UserIcon from "@/assets/icons/userIcon";
import Button from "@/components/button";
import CredInput from "@/components/credInput";
import SignInView from "@/components/views/signInView";
import { LoginScreenPropsType, UseStateType } from "@/consts/Types";
import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const LoginScreen = ({ navigation }: LoginScreenPropsType) => {
  const [clearInput, setClearInput]: UseStateType<boolean> = useState(false);
  const clearAllInputs = () => setClearInput(clearInput ? false : true);

  const onPressLoginHandler = () => {
    clearAllInputs();
  };

  const onPressSignUpHandler = () => navigation.navigate("SignUp");

  return (
    <SignInView>
      <View style={styles.inputsMainContainer}>
        <CredInput title="username" icon={<UserIcon />} clear={clearInput} warnings={["TODO"]} />
        <CredInput title="passwords" icon={<LockIcon />} clear={clearInput} secureText={true} />
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
