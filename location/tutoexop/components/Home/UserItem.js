import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const UserItem = ({ user }) => {
  return (
    <TouchableOpacity style={styles.root}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/1840992/pexels-photo-1840992.jpeg",
        }}
        style={styles.userImage}
      />
      <View style={styles.startContainer}>
        <AntDesign name="star" size={12} color="#ff9e81" />
        <AntDesign name="star" size={12} color="#ff9e81" />
        <AntDesign name="star" size={12} color="#ff9e81" />
        <AntDesign name="star" size={12} color="white" />
        <AntDesign name="star" size={12} color="white" />
      </View>
      <View>
        <Text style={styles.userName}>
          {user.lastname} {user.firstname}
        </Text>
      </View>
      <View style={styles.last}>
        <Text style={styles.total}>+40</Text>
        <AntDesign name="arrowright" size={12} color="white" />

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "blue",
    width: 170,
    padding: 10,
    borderRadius: 15,
  },
  userImage: {
    width: 70,
    height: 70,
    objectFit: "cover",
    borderRadius: 15,
  },
  startContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginTop: 10,
  },
  userName: {
    color: "white",
    fontSize: 20,
    marginTop:10,
  },
  last: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:10
  },
  total: {
    fontSize:16,
    color:"white",
    fontWeight: "bold"
  }
});

export default UserItem;
