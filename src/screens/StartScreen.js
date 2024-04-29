// This page validates and authenticates users before entering the application
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";
import LilypadLogo from "../components/LilypadLogo";
import { useTheme } from "react-native-paper";

function StartScreen({ navigation }) {
  const theme = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <LilypadLogo styles={styles.logo} />
      <Text style={styles.text}>Welcome to Lilypad. A video streaming app</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        {" "}
        Sign in
      </Button>

      <Button mode="contained" onPress={() => console.log("do authentication")}>
        {" "}
        Sign in with Google
      </Button>
    </View>
  );
}
export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' 
  },

 
  text: {
				margin: 10
	},
});
