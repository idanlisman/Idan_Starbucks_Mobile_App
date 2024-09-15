import { TextInput, StyleSheet, Text, View, ViewProps } from "react-native";
import { ReactNode, useState, useEffect } from "react";
import { OnChangeTextType, UseStateType, UseStateSetType } from "@/consts/Types";

interface CredInputPropsType extends ViewProps {
  title: string;
  setValueProp: UseStateSetType<string>;
  clear?: boolean;
  icon?: ReactNode;
  secureText?: boolean;
  warnings?: string[];
}

const CredInput = ({ title, setValueProp, icon, clear, secureText = false, warnings }: CredInputPropsType) => {
  const [value, setValue]: UseStateType<string> = useState("");
  const onTypingHandler = (event: OnChangeTextType) => {
    const val: string = event.nativeEvent.text;
    setValue(val);
    setValueProp(val);
  };

  useEffect(() => setValue(""), [clear]);

  return (
    <View style={styles.inputOutterContaier}>
      <View style={styles.inputInnerContainer}>
        <TextInput value={value} style={styles.input} onChange={onTypingHandler} secureTextEntry={secureText} />
        <View style={styles.icon}>{icon}</View>
      </View>
      <View>
        <Text style={styles.inputTitle}>{title}</Text>
        <View>
          {warnings &&
            warnings.map((msg, idx) => (
              <View key={idx}>
                <Text style={styles.inputWarning} key={idx}>
                  {`-  ${msg}`}
                </Text>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputOutterContaier: {
    padding: 20,
  },
  inputInnerContainer: {
    borderBottomWidth: 3,
    borderBottomColor: "black",
    flexDirection: "row",
    width: 300,
    height: 30,
    justifyContent: "space-between",
  },
  inputTitle: {
    padding: 4,
    paddingLeft: 0,
    fontFamily: "Santana",
    fontSize: 15,
  },
  input: {
    fontFamily: "Santana",
    fontSize: 20,
    letterSpacing: 1.5,
    paddingHorizontal: 5,
    paddingLeft: 0,
    width: "92%",
  },
  icon: {
    width: "8%",
  },
  inputWarningPrefix: {
    color: "rgba(215, 34, 34, 1)",
    fontSize: 50,
  },
  inputWarning: {
    color: "rgba(215, 34, 34, 1)",
    fontFamily: "SantanaBlack",
    fontSize: 13,
  },
});

export default CredInput;
