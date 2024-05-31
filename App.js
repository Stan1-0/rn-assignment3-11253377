import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <View style={styles.header}>
          <View style={styles.leftContent}>
            <Text style={styles.boldText}>Hello, Devs</Text>
            <Text style={styles.normalText}>14 tasks devs</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Image source={require("./assets/user.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <TextInput style={styles.input} placeholder="Search" />
          <View style={styles.filterIcon}>
            <Image source={require("./assets/filter.png")} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },
  contain: {
    padding: 24,
  },
  boldText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: 354,
    height: 52,
    gap: 134,
  },
  leftContent: {},
  button: {
    backgroundColor: "white",
    borderRadius: 9999,
    padding: 8,
    width: 46,
    height: 45,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    borderRadius: 10,
    padding: 5,
  },
  filterIcon: {
    backgroundColor: "#E0522F",
    width: 50,
    height: 48,
    padding: 8,
    borderRadius: 9999,
  },
  categories: {
    marginTop: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  categoryItem: {
    backgroundColor: "white",
    marginRight: 20,
    padding: 20,
    borderRadius: 9999,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tasks: {
    marginTop: 20,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  taskItem: {
    backgroundColor: "white",
    border: "1px solid #E8D1BA",
    marginRight: 20,
    padding: 20,
    borderRadius: 9999,
    width: "100%",
    marginBottom: 20,
  },
  taskName: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default App;
