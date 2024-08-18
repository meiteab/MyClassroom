import { StyleSheet, View, Text } from "react-native"
import EvilIcons from "@expo/vector-icons/EvilIcons";

const page = () => {
    return (
        <View style={styles.greentContainer}>
        <Text style={styles.greetingText}>Decouvrir</Text>
        <EvilIcons name="search" size={35} color="black" />
      </View>
    )
}
const styles = StyleSheet.create({
    greentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        alignItems: "center",
        marginTop: 15,
        marginBottom:15
      },
      greetingText: {
        fontSize: 30,
        fontWeight: "semibold",
      },
})

export default page 