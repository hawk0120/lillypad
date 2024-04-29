import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { Button as PaperButton } from "react-native-paper";

function Button({ style, mode, ...props }) {
  const theme = useTheme();
  return (
    <PaperButton
      style={styles.button}
				buttonColor= {theme.colors.secondary}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});

export default Button;
