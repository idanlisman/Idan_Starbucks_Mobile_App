import { ViewProps, StyleSheet, View, Text } from "react-native";
import AppView from "./appView";
import Consts from "@/consts/Consts";

const SignInView = ({ children }: ViewProps) => {
  return (
    <AppView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{Consts.SIGN_IN_SCREEN_TITLE}</Text>
      </View>
      {children}
    </AppView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    // paddingTop: 40,
  },
  title: {
    fontFamily: "SantanaBlack",
    fontSize: 25,
    letterSpacing: 3.77,
  },
});

export default SignInView;
