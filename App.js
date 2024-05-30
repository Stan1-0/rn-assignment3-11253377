import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>Hello, Devs</Text>
      <Image source={require("./assets/user.png")} style={styles.logo} />
      <StatusBar style="auto" />
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8D1BA",
  },
  header: {
    flex: 1,
  },
  logo: {
    width: 50,
    height: 52,
  },
  heading: {
    fontSize: 32,
    fontWeight: 700,
    fontFamily: "Lato-Bold",
    color: "#000000",
  },
});

export default App;
