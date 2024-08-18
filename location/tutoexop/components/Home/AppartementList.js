import houseList from "@/assets/datas/datas-appartement.json";
import AppartementItem from "./AppartementItem";
import {
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from "react-native";


const page = () => {
  return (
    <FlatList
      data={houseList}
      contentContainerStyle={{ gap: 20, marginLeft: 15, paddingRight: 40 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) =>
        item.cover_image_url.toLowerCase().toString() +
        Math.floor(Math.random() * 1000)
      }
      renderItem={({ item }) => <AppartementItem item={item} /> }
    />
  );
};

const styles = StyleSheet.create({
  
});

export default page;
