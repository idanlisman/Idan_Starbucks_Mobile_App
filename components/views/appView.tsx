import Colors from "@/consts/Colors";
import { View, ImageBackground, StyleSheet, ViewProps } from "react-native";

const AppView = ({ children }: ViewProps) => {
  return (
    <View style={[{ backgroundColor: Colors.appBackground }, styles.container]}>
      <ImageBackground style={styles.backgroundImage} source={require("@/assets/images/starbucks-logo-starbucks-icon.png")} resizeMode="cover">
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default AppView;
