import { View, StyleSheet } from "react-native";
import React from "react";

function Row({ children }) {
  return <View style={styles.row}> {children} </View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});

export default Row;
