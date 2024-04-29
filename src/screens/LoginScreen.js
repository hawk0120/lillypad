import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { emailValidator, passwordValidator } from "../utils/validator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onPressLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://0192.168.150.15:3000", {
        email,
        password,
      });
      AsyncStorage.setItem("token", response.data.token, () => {
        console.log(response.data.token);
      });
      setLoading(false);
      navigation.navigate("Dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <BackButton style={styles.backButton} goBack={navigation.goBack} />
      <View style={styles.row}>
        <TextInput
          description="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          description="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <Button
          mode="contained"
          onPress={() => onPressLogin()}
          laoding={loading}
        >
          {" "}
          Create Account{" "}
        </Button>
      </View>
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    alignItems: "center",
  },
  button: {},
  input: {
    borderRadius: 5,
  },
});
