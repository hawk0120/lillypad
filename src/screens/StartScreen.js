import * as React from 'react';
import { Text, View, Button, StyleSheet} from "react-native";


function StartScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome to Lilypad. A video streaming app</Text>

      <Button
				title="Login"
					onPress={() => navigation.navigate("LoginScreen")}
								style={styles.button}
					>
        Log in
      </Button>
    </View>
  );
}
export default StartScreen;

const styles = StyleSheet.create({
				container: {
								flex: 1,
				},
				button: {
								borderWidth: 2,
								borderRadius: 6,
								backgroundColor: 'black', 
								marginHorizontal: 5,
				},

				text: {
								marginTop: 200,
								marginBottom: 25,
								textAlign: 'center',
				}



})
