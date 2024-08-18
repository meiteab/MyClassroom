import { StyleSheet, View, Text } from "react-native";
import PostListDatas from "../../assets/datas/datas-posts.json";
import  PostItem  from "./PostItem";

const PostList = () => {
    // console.log(PostListDatas[0])
    
    return (
        <View style={styles.root}>
      <Text style={styles.title}> Derniere publications </Text>

      {PostListDatas.map((post) => (
        <PostItem postData={post} key={post.id} />
      ) 
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 25,
  },
});

export default PostList;
