import { FlatList, View, Text, StyleSheet } from "react-native";
import userList from "../../assets/datas/datas-user.json";
import UserItem from "../Home/UserItem";

const Users = () => {
  return (
    <View style={{ marginLeft: 15, gap: 20, marginTop: 15
        
     }}>
      <Text style={styles.tilte}> Nos meilleurs utilisateurs </Text>
      <FlatList
        data={userList}
        contentContainerStyle={styles.root}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserItem user={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: 20,
    paddingRight: 20,
  },
  tilte: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default Users;
