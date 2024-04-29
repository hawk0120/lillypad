import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import StartScreen from "./src/screens/StartScreen";
import DashboardScreen from "./src/screens/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "./src/screens/LoginScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f0f0f0",
    secondary: "#4CB963",
    text: "#0A3200",
    border: "#0A3200",
    notification: "#EF2917",
  },
};

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator 
					screenOptions={{headerShown: false}}>
          {isAuthenticated ? (
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          ) : (
            <>
              <Stack.Screen name="StartScreen" component={StartScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
								<Stack.Screen name="Dashboard" component={DashboardScreen} />
											
									</>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
