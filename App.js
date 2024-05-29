import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello World!</Text>
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
  heading:{
    fontSize: 30,
    fontFamily: Lato,
  }
});

export default App;
