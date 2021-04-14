import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { TypingAnimation } from "react-native-typing-animation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing_email: false,
      typing_password: false,
      animation_login: new Animated.Value(width - 40),
      enable: true,
    };
  }

  _foucus(value) {
    if (value == "email") {
      this.setState({
        typing_email: true,
        typing_password: false,
      });
    } else {
      this.setState({
        typing_email: false,
        typing_password: true,
      });
    }
  }

  _typing() {
    return <TypingAnimation dotColor="#93278f" style={{ marginRight: 25 }} />;
  }

  _animation() {
    Animated.timing(this.state.animation_login, {
      toValue: 40,
      duration: 250,
    }).start();

    setTimeout(() => {
      this.setState({
        enable: false,
        typing_email: false,
        typing_password: false,
      });
    }, 150);
  }

  render() {
    const width = this.state.animation_login;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <ImageBackground
            style={styles.imageBackground}
            source={require("../assets/images/5469.jpg")}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              Welcome Back
            </Text>
            <Text
              style={{
                color: "yellow",
              }}
            >
              Sign in to continute
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.footer}>
          <Text
            style={[
              styles.title,
              {
                marginTop: 50,
              },
            ]}
          >
            E-mail
          </Text>
          <View style={styles.action}>
            <FontAwesome
              style={styles.colors}
              name="envelope"
              color="white"
              size={20}
            />
            <TextInput
              placeholder="Your email.."
              style={styles.textInput}
              onFocus={() => this._foucus("email")}
            />
            {this.state.typing_email ? this._typing() : null}
          </View>

          <Text
            style={[
              styles.title,
              {
                marginTop: 20,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <FontAwesome
              style={styles.colors}
              name="lock"
              color="white"
              size={25}
            />
            <TextInput
              secureTextEntry
              placeholder="Your password.."
              style={styles.textInput}
              onFocus={() => this._foucus("password")}
            />
            {this.state.typing_password ? this._typing() : null}
          </View>

          <TouchableOpacity onPress={() => this._animation()}>
            <View style={styles.button_container}>
              <Animated.View
                style={[
                  styles.animation,
                  {
                    width,
                  },
                ]}
              >
                {this.state.enable ? (
                  <Text style={styles.textLogin}>Login</Text>
                ) : (
                  <Animatable.View animation="bounceIn" delay={50}>
                    <FontAwesome name="check" color="white" size={20} />
                  </Animatable.View>
                )}
              </Animated.View>
            </View>
          </TouchableOpacity>

          <View style={styles.signUp}>
            <Text style={{ color: "black" }}>New user?</Text>
            <Text style={{ color: "blue" }}> Sign up?</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "center",
            }}
          >
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
      </View>
    );
  }
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 2,
    padding: 20,
    position: "relative",
    backgroundColor: "#e5e5e5",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#0d47a1",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    color: "black",
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  textInput: {
    flex: 1,
    marginTop: 5,
    paddingBottom: 5,
    color: "gray",
  },
  button_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    backgroundColor: "#0d47a1",
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  colors: {
    marginTop: 10,
    color: "black",
    marginRight: 15,
  },
});
