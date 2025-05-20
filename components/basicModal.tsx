import { PropsWithChildren } from "react";
import { Modal, View, StyleSheet, useWindowDimensions, ScrollView } from "react-native";

const BasicModal = ({ children, isOpen }: { isOpen: boolean } & PropsWithChildren) => {
  const { height, width } = useWindowDimensions();

  return (
    <Modal animationType="slide" visible={isOpen} transparent={true}>
      <View style={style.modalOutterContainer}>
        <ScrollView style={[style.modalContent, { maxHeight: height / 2.5, width }]}>{children}</ScrollView>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  modalOutterContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalInnerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    overflow: "scroll",
  },
});

export default BasicModal;
