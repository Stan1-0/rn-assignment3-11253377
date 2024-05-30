import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>Hello, Devs</Text>
      <Image
        source={require("./assets/user.png")}
        style={{ width: 100, height: 100 }}
      />
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
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
  },
  heading: {
    fontSize: 32,
    fontWeight: 700,
    fontFamily: "Lato-Bold",
    color: "#000000",
  },
});

export default App;
