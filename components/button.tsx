import Colors from "@/consts/Colors";
import { OnPressType } from "@/consts/Types";
import { Pressable, Text, StyleSheet, View, ViewProps } from "react-native";

interface ButtonPropsType extends ViewProps {
  title: string;
  height: number;
  width: number;
  fontSize: number;
  isDark?: boolean;
  style?: Object;
  onPress?: OnPressType;
}

const Button = ({ title, style, height, width, fontSize, isDark, onPress }: ButtonPropsType) => {
  return (
    <View>
      <Pressable style={({ pressed }) => [mainStyle.pressable, { height, width, backgroundColor: isDark ? (pressed ? Colors.buttonBackgroundDarkPressed : Colors.buttonBackgroundDark) : pressed ? Colors.buttonBackgroundLightPressed : Colors.buttonBackgroundLight }, style]} onPress={onPress}>
        <Text style={[mainStyle.text, { fontSize }]}>{title}</Text>
      </Pressable>
    </View>
  );
};

const mainStyle = StyleSheet.create({
  pressable: {
    margin: 10,
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "center",
  },
  text: {
    fontFamily: "SantanaBlack",
    letterSpacing: 1.77,
  },
});

export default Button;
