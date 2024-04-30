import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState, useEffect}from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { getAllVideo } from '../utils/api';
import Header from "../components/Header";
import BackButton from "../components/BackButton";

export default function Dashboard({ navigation }) {
				const [videoList, setVideoList] = useState();
			

const getVideoList =  async () => {
				let videos = await getAllVideo();
				return setVideoList(videos);
}
				
const onPressLogout = async () => {
    try {
      AsyncStorage.removeItem("token");
      navigation.navigate("StartScreen");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };


 return (
    <View style={styles.container}>
				<BackButton />
				<Header style={styles.header}/>
				
</View>
  );
}

const styles = StyleSheet.create({
  container: {
				flex:1
	},


				header:{
				}
				
});
