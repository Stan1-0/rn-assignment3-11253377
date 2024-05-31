import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const App = () => {
  const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headingText}>Hello, Devs</Text>
        <Text style={styles.headingSubText}>14 tasks today</Text>
        <Image source={require("./assets/user.png")} style={styles.logo} />
        <StatusBar style="auto" />
      </View>
    );
  };

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
    width: 354,
    height: 52,
    top: 52,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logo: {
    width: 46,
    height: 45,
  },
  headingText: {
    fontSize: 32,
    fontWeight: 700,
    fontFamily: "Lato-Bold",
    color: "#000000",
    lineHeight: 38.4,
  },
  headingSubText: {
    fontSize: 12,
    lineHeight: 14.4,
  },
});

export default App;
