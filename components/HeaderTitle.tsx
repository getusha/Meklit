import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

export default function HeaderTitle() {
    return (
        <View style={{ display: "flex", flexDirection: "row" }}>
            <Image style={{ height: 30, width: 30, marginTop: "auto", marginBottom: "auto", backgroundColor: colors.primaryLight, borderRadius: 100 }} source={require("../assets/images/logo.png")} />
            <Text style={styles.topHeaderTitle}>መክሊት</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topHeaderTitle: {
        color: colors.primaryLight,
        fontFamily: "shiromeda",
        fontSize: 20,
        marginRight: "auto",
        marginHorizontal: 10,
        marginTop: "auto",
        marginBottom: "auto"
    }
})