import React, { useEffect, useState }from "react";
import { View, TouchableOpacity, StyleSheet, Image} from "react-native";
import { useTheme } from "react-native-paper";

function HeaderItem({ imageProps}) {
const theme = useTheme();


return (
    <View>
      <TouchableOpacity borderColor={theme.colors.primary} style={styles.touch}>
				<Image style={styles.img} source={imageProps}/>
				</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
				img: {
				width: 50,
				height: 50,
				},
				touch: {
				borderRadius: 8,
				padding: 10
				}

});

export default HeaderItem;
