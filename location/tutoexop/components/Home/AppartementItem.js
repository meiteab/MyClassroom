import { View,Text, ImageBackground, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const AppartementItem = ({item}) => {
return (
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
                <Text style={styles.tagText}> Enregister nouvellement </Text>
              </View>
            </View>
          </ImageBackground>
          <View style={{ marginTop: 10 }}>
            <View style={styles.rowBetween}>
              <Text style={{ fontSize: 20 }}>{item.location_city}</Text>
              <View style={styles.tagContainer}>
                <AntDesign name="star" size={20} color="#ff9e81" />
                <Text style={styles.tagNotText}>5.0</Text>
              </View>
            </View>
          </View>
          <View style={[styles.rowBetween, styles.m1]}>
            <Text style={{ fontSize: 15 }}>${item.month_price}/mois</Text>
            <View style={styles.tagContainer}>
              <AntDesign name="user" size={15} color="#ff9e81" />
              <Text style={styles.tagNotText}>3 visites</Text>
            </View>
          </View>
        </View>
)

}


const styles = StyleSheet.create({
    imageBlock: {
        width: 275,
      },
      ImageBackground: {
        height: 170,
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
      rowBetween: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      tagContainer: {
        backgroundColor: "#f4f4f4",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        borderRadius: 5,
        padding: 5,
      },
      tagText: {
        alignItems: "center",
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
      },
      tagNotText: {
        color: "black",
        fontSize: 20,
      },
      m1: {
        marginTop: 10,
      },


})


export default AppartementItem;