import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import houseList from "@/assets/datas/datas-appartement.json";

const page = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.greentContainer}>
        <Text style={styles.greetingText}>Decouvrir</Text>
        <EvilIcons name="search" size={35} color="black" />
      </View>
      <FlatList
        data={houseList}
        contentContainerStyle={{ gap: 20 }}
        horizontal
        keyExtractor={
          (item) => item.id.toString()
          //   cover_image_url.toLowerCase().toString() +
          //   Math.floor(Math.random() * 1000)
        }
        renderItem={({ item }) => (
          <View style={styles.imageBlock}>
            <ImageBackground
              source={{
                uri: item.cover_image_url,
              }}
              resizeMode="cover"
              style={styles.ImageBackground}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={styles.tag}>
                  {" "}
                  <Text style={styles.tagText}> Enregister nouvellement </Text>
                </View>
              </View>
            </ImageBackground>
            <View>
              <View style={styles.rowBetween}>
                <Text>{item.location_city}</Text>
                <View style={styles.tagContainer}>
                  <Text style={styles.tagText}>5.0</Text>
                  <AntDesign name="star" size={20} color="white" />
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  greentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
    marginTop: 30,
  },
  greetingText: {
    fontSize: 30,
    fontWeight: "semibold",
  },
  imageBlock: {
    width: 320,
  },
  ImageBackground: {
    height: 200,
    borderRadius: 30,
    overflow: "hidden",
    padding: 15,
  },
  tag: {
    padding: 5,
    backgroundColor: "blue",
    opacity: 0.9,
    borderRadius: 30,
  },
  tagText: {
    color: "white",
    padding: 4,
  },
  rowBetween:{
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between'
  },
  tagContainer: {
    backgroundColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 5,
    padding:5
  },
  tagText: {
    color: 'white'
  }
});

export default page;
