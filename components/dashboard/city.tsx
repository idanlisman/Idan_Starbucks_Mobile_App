import CupIcon from "@/assets/icons/cupIcon";
import Colors from "@/consts/Colors";
import { UseStateType } from "@/consts/Types";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Button from "../button";

interface CityType {
  title: string;
  type: string;
  size: number;
}

const City = ({ title, type, size }: CityType) => {
  const { height, width }: { height: number; width: number } = useWindowDimensions();
  const [currentCupIconPos, setCurrentCupIconPos]: UseStateType<number> = useState(0);

  const incrementCupPosHandler = (pos: number) => {
    if (currentCupIconPos + pos > 359) {
      setCurrentCupIconPos(0);
      return;
    }
    const stepAmount = 1;
    const interval = setInterval(() => {
      setCurrentCupIconPos((prev) => prev + stepAmount);
      pos -= stepAmount;
      if (pos == 0) clearInterval(interval);
    }, 5);
  };

  return (
    <Pressable
      onPress={() => {
        incrementCupPosHandler(359);
      }}
      style={[styles.container, { height: height / 5.5, width: width / 1.3 }]}
    >
      <View style={styles.container_header}>
        <View style={styles.container_title}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.container_status}>
          <Text style={styles.semi_title_primary}>{type}</Text>
          <Text style={styles.semi_title_secondary}>{`${size} oz`}</Text>
        </View>
      </View>
      <View style={[styles.container_statusbar, { height: height / 30, width: width / 1.5 }]}>
        <View style={[styles.container_statusbar, styles.inner_container_statusbar, { height: height / 30, width: 30 + (currentCupIconPos / 360) * 225 }]}>
          <View style={[styles.statusbar_icon, { left: (currentCupIconPos / 360) * 225 }]}>
            <CupIcon position={currentCupIconPos} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  container_header: {
    width: "100%",
    padding: 20,
  },
  container_title: {
    paddingBottom: 5,
  },
  title: {
    fontFamily: "SantanaBlack",
    fontSize: 30,
  },
  container_status: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  semi_title_primary: {
    fontFamily: "Santana",
    fontSize: 25,
    paddingRight: 10,
  },
  semi_title_secondary: {
    fontFamily: "SantanaRegularCondensed",
    fontSize: 18,
  },
  container_statusbar: {
    backgroundColor: "rgba(214, 214, 214, 0.9)",
    borderRadius: 20,
    justifyContent: "center",
  },
  inner_container_statusbar: {
    backgroundColor: "rgba(161, 147, 127, 1)",
  },
  statusbar_icon: {
    position: "absolute",
  },
});

export default City;
