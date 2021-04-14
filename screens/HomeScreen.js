import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 300 }}
        source={require("../assets/images/5469.jpg")}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hello!</Text>
      <Text
        style={{
          fontSize: 16,
          color: "gray",
          textAlign: "center",
          marginHorizontal: 20,
        }}
      >
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. Welcome to Tutor Login
      </Text>

      <View style={{ flexDirection: "row", margin: 20, paddingVertical: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "space-between",
            backgroundColor: "#0d47a1",
            padding: 10,
            width: 150,
            borderRadius: 30,
            marginVertical: 2,
          }}
        >
          <Text style={{ textAlign: "center", color: "#FFF", fontSize: 18 }}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignupScreen")}
          style={{
            marginLeft: 2,
            alignItems: "center",
            justifyContent: "center",
            alignContent: "space-between",
            backgroundColor: "#FFF",
            padding: 10,
            width: 150,
            borderRadius: 30,
            marginVertical: 2,
            borderWidth: 1,
            borderColor: "#0d47a1",
          }}
        >
          <Text style={{ textAlign: "center", color: "#0d47a1", fontSize: 18 }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 16, marginTop: 10 }}>or via social media</Text>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: "#3f51b5",
            alignItems: "center",
            justifyContent: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}>
            f
          </Text>
        </View>

        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: "#f44336",
            marginHorizontal: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}>
            G
          </Text>
        </View>

        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: "#1565c0",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}>
            in
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
