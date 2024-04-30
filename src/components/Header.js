import React from "react";
import { View, StyleSheet} from "react-native";
import HeaderItem from "./HeaderItem";
import HouseImg from '../assets/house.png'
import SearchImg from '../assets/search.png'
import LogoutImg from '../assets/wave.png'
import { useTheme } from "react-native-paper";

function Header() {
 const theme = useTheme();

return (
    
   <View backgroundColor={theme.colors.secondary} style={styles.header}>
      <HeaderItem imageProps={SearchImg} />
      <HeaderItem imageProps={HouseImg} />
      <HeaderItem imageProps={LogoutImg} />
    </View>
  );
}

const styles = StyleSheet.create({
 header: {
				 flexDirection: "row",
				justifyContent: "space-between",	
				position: "absolute",
				 bottom: 0,
				 left: 0,
				 right: 0,
				padding: 10,				
 }				
				
});

export default Header;
