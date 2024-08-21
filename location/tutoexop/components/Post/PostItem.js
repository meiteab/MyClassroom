import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

const PostItem = ({postData}) => {
  console.log(postData);

  const auClick = () => {
    // Alert.alert("hello");
  };
  return (
    <Pressable style={styles.root} onPress={auClick}>
      <Text>{postData.userName}m</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({

  root: {
    borderRadius: 15,
    backgroundColor: "purple",
  },
});

export default PostItem;
