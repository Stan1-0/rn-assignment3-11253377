import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from "react-native";

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>Hello, Devs</Text>
        <Text style={styles.headingSubText}>14 tasks today</Text>
        <Image source={require("./assets/user.png")} style={styles.logo} />
        <StatusBar style="auto" />
      </View>
      <View style={styles.search}>
        <TextInput 
        style={styles.searchInput}
        placeholder="Search"
        
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f0e8",
    padding: 20,
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
  search: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    borderRadius: 10,
    padding: 5,
  },
  searchInput: {
    flex: 1,
    margin: 10,
  },
});

export default App;
