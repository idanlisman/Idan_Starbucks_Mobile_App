import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

interface BasicView {
  backgroundColor?: string;
}

const BasicView = ({ children, backgroundColor }: PropsWithChildren & BasicView) => {
  return <View style={[styles.container, { backgroundColor }]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BasicView;
