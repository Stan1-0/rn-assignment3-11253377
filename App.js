import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

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
  {
    id: 3,
    name: "Code",
    description: "12 tasks",
    Image: require("./assets/code.png"),
  },
  {
    id: 4,
    name: "Cook",
    description: "12 tasks",
    Image: require("./assets/study.png"),
  },
  {
    id: 5,
    name: "Meditation",
    description: "12 tasks",
    Image: require("./assets/study.png"),
  },
  {
    id: 6,
    name: "Sleep",
    description: "12 tasks",
    Image: require("./assets/study.png"),
  },
  {
    id: 7,
    name: "CleanUp",
    description: "12 tasks",
    Image: require("./assets/study.png"),
  },
  {
    id: 8,
    name: "Gaming",
    description: "12 tasks",
    Image: require("./assets/study.png"),
  },
];

const ongoingTask = [
  { id: 1, name: "Mobile App Development" },
  { id: 2, name: "Web Development" },
  { id: 3, name: "Software engineering" },
  { id: 4, name: "DevOps" },
  { id: 5, name: "Internship" },
  { id: 6, name: "School" },
  { id: 7, name: "Data Structures and Algorithm" },
  { id: 8, name: "Calculus" },
  { id: 9, name: "Database Management" },
  { id: 10, name: "Python" },
  { id: 11, name: "Project Management" },
  { id: 12, name: "Agile Development" },
  { id: 13, name: "Call Of Duty" },
  { id: 14, name: "Indomie" },
  { id: 15, name: "Yoga" },
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
              <TouchableOpacity>
                <Image
                  source={require("./assets/filter.png")}
                  style={styles.filterPicture}
                />
              </TouchableOpacity>
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
                  <Image source={item.Image} style={styles.categoryImage} />
                </View>
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.tasks}>
            <Text style={styles.taskTitle}>Ongoing Tasks</Text>
            <FlatList
              data={ongoingTask}
              renderItem={({ item }) => (
                <View style={styles.taskItem}>
                  <Text style={styles.taskName}>{item.name}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
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
    marginTop: -5,
  },
  categoriesTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  categoryItem: {
    backgroundColor: "white",
    marginRight: 20,
    padding: 12,
    borderRadius: 15,
    gap: 10,
    height: 186,
    width: 192,
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  categoryDescription: {
    fontSize: 12,
  },
  task: {
    marginTop: -5,
  },
  taskTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  taskItem: {
    backgroundColor: "white",
    border: 1,
    borderColor: "#E8D1BA",
    padding: 20,
    borderRadius: 15,
    width: 354,
    height: 128,
    marginBottom: 20,
  },
  taskName: {
    fontSize: 16,
    lineHeight: 19.2,
    fontWeight: "700",
    width: 200,
    height: 19,
    textAlign: "auto",
  },
});

export default App;
