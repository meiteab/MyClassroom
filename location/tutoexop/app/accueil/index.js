import {
  View,
  Text,
  StyleSheet,
  
} from "react-native";
import GretingUser from "../../components/UI/GretingUser"
import AppartementList from "../../components/Home/AppartementList";
import Users  from "../../components/UI/Users";
import PostList from "@/components/Post/PostList";

const page = () => {
  return (
    <View style={styles.appContainer}>
     <GretingUser />
     <View>

     <AppartementList />
     <Users /> 
     <PostList />
     </View>
    </View>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
 
  
});

export default page;
