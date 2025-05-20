import BasicModal from "@/components/basicModal";
import Button from "@/components/button";
import City from "@/components/dashboard/city";
import AppView from "@/components/views/appView";
import Consts from "@/consts/Consts";
import { MainScreenPropsType, UseStateType } from "@/consts/Types";
import network from "@/utils/network";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
// import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";

const COUNTRIES = ["CANADA - BC", "USA - CA"];

const MainScreen = ({ navigation }: MainScreenPropsType) => {
  const [isOpen, setIsOpen]: UseStateType<boolean> = useState(false);
  // const { hasPermission, requestPermission } = useCameraPermission();
  // const device = useCameraDevice("back");

  // useEffect(() => {
  //   requestPermission();
  // }, []);
  const onPress = async () => {
    // try {
    //   const res: AxiosResponse = await network.securedPost(`${Consts.AUTH_BACKEND_SERVER_URL}/v1/dashboard/test`, {});
    //   console.log(res.data.id);
    // } catch (err) {
    //   console.log(err);
    // }
    setIsOpen(isOpen === true ? false : true);
  };

  // if (device == null) return;
  return (
    <AppView>
      <Button title="PRESS" width={200} height={100} fontSize={10} onPress={onPress} />
      {/* <Camera device={device} isActive={false}></Camera> */}
      <ScrollView style={{ width: "100%" }} contentContainerStyle={style.container_dashboard} showsVerticalScrollIndicator={false}>
        <City title="Kelowna" type="Demi" size={3} />
        <City title="Vancouver" type="Grande" size={16} />
        <City title="Kelowna" type="Demi" size={3} />
        <City title="Kelowna" type="Demi" size={3} />
      </ScrollView>
      <BasicModal isOpen={isOpen}>
        <View style={style.container}>
          {COUNTRIES.map((country, idx) => (
            <Pressable key={idx} style={({ pressed }) => [style.container_option, { backgroundColor: pressed ? "rgba(189, 246, 188, 0.6)" : undefined }]} onPress={() => setIsOpen(false)}>
              <Text key={idx} style={style.option}>
                {country}
              </Text>
            </Pressable>
          ))}
        </View>
      </BasicModal>
    </AppView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingBottom: 80,
  },
  container_dashboard: {
    flexGrow: 1,
    alignItems: "center",
  },
  container_option: {
    padding: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  option: {
    fontFamily: "SantanaBlack",
    fontSize: 20,
  },
});

export default MainScreen;
