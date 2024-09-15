import AppView from "@/components/views/appView";
import { Image, StyleSheet } from "react-native";

const LoadingScreen = () => {
  return (
    <AppView>
      <Image style={styles.image} source={require("@/assets/images/starbucks-logo-loading-gif.gif")} resizeMode="cover" />
    </AppView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
    borderRadius: 150, // Half the height & width for Circle shape
  },
});

export default LoadingScreen;
