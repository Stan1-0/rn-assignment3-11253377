import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FlatList } from "react-native";


const categoriesData = [
  {
    id: 1,
    name: "Exercise",
    description: "12 tasks",
    Image: require("./assets/exercise.png"),
  },
  {
    id: 2,
    name: "Study",
    description: "12 tasks",
    Image: require("./assets/study.png"),
  },
];

const ongoingTask = [
  { id: 1, name: "Mobile App Development" },
  { id: 2, name: "Web Development" },
  { id: 3, name: "Push ups" },
];

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.contain}>
          <View style={styles.header}>
            <View style={styles.leftContent}>
              <Text style={styles.boldText}>Hello, Devs</Text>
              <Text style={styles.normalText}>14 tasks devs</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("./assets/user.png")}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.searchBar}>
            <TextInput style={styles.input} placeholder="Search" />
            <View style={styles.filterIcon}>
              <Image
                source={require("./assets/filter.png")}
                style={styles.filterPicture}
              />
            </View>
          </View>

          <View style={styles.categories}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <FlatList
              data={categoriesData}
              renderItem={({ item }) => (
                <View style={styles.categoryItem}>
                  <Text style={styles.categoryName}>{item.name}</Text>
                  <Text style={styles.categoryDescription}>
                    {item.description}
                  </Text>
                  <Image source={item.Image} style={styles.categoryItem} />
                </View>
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator = {false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },
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
    lineHeight: 38.4,
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
    borderRadius: 50,
    padding: 5,
  },
  profileImage: {
    width: 46,
    height: 45,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: 353,
    height: 49,
  },
  filterPicture: {
    width: 34,
    height: 34,
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    borderRadius: 10,
    padding: 8,
  },
  filterIcon: {
    backgroundColor: "#F0522F",
    width: 50,
    height: 48,
    padding: 8,
    borderRadius: 14,
  },
  categories: {
    marginTop: 20,
  },
  categoriesTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
  },
  categoryItem: {
    backgroundColor: "white",
    marginRight: 20,
    padding: 12,
    borderRadius: 15,
    gap: 10,
    height: 186,
    width:192
  },
  categoryImage: {
    width: 151,
    height: 132,
    left: 20,
    top: 41,
    top: 298,
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
