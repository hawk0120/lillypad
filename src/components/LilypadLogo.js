import {
  StyleSheet,
  Text,
  View,
	Image,
  Animated ,
} from "react-native";
import React from "react";

function LilypadLogo() {
  return (
    <Animated.View style={styles}>
      <Image style={styles.logo} source={require("../assets/icon.png")} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
});

export default LilypadLogo;
