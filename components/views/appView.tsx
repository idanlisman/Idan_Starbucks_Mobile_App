import Colors from "@/consts/Colors";
import { View, ImageBackground, StyleSheet } from "react-native";
import BasicView from "./basicView";
import { PropsWithChildren } from "react";

const AppView = ({ children }: PropsWithChildren) => {
  return (
    <BasicView backgroundColor={Colors.appBackground}>
      <ImageBackground style={styles.backgroundImage} source={require("@/assets/images/starbucks-logo-starbucks-icon.png")} resizeMode="cover">
        {children}
      </ImageBackground>
    </BasicView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default AppView;
