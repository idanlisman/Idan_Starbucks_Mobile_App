import React from "react";
import { StyleSheet } from "react-native";
import Svg, { G, Circle, Path } from "react-native-svg";

interface CupIconType {
  position?: number;
}

const CupIcon = ({ position = 0 }: CupIconType) => {
  return (
    <Svg style={styles.shadowbox} width="50" height="50" viewBox="0 0 50 50" fill="none">
      <G>
        <Circle cx="25" cy="25" r="17.5" fill="#D7D5D5" stroke="#B2B2B2" strokeWidth="0.2" />
        <Circle cx="24" cy="26" r="12.5" transform={`rotate(${position} 25 25)`} fill="#B5B5B5" />
        <Path transform={`rotate(${position} 23.9061 25.3065)`} d="M16.3869 28.6383C16.9257 27.9233 17.9692 27.8423 18.6118 28.4656L20.0076 29.8194C20.1986 30.0046 20.4119 30.1654 20.6426 30.2979L22.3286 31.2664C23.1049 31.7124 23.3147 32.7378 22.7759 33.4528C22.3242 34.0523 21.4967 34.2216 20.8458 33.8477L18.9233 32.7433C18.6354 32.5779 18.3692 32.3773 18.1308 32.1461L16.5393 30.6025C16.0005 30.0798 15.9351 29.2378 16.3869 28.6383Z" fill="#616161" />
      </G>
    </Svg>
  );
};

const styles = StyleSheet.create({
  shadowbox: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
});

export default CupIcon;
