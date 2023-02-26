import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Badge(props: { title: string }) {
    return (
        <View style={styles.badge}>
            <Icon name="tag" color={colors.primaryRed} />
            <Text style={styles.badgeText}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        padding: 5,
        backgroundColor: colors.primaryGray,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        borderRadius: 5,
        marginHorizontal: 3,
        fontSize: 12,
        minWidth: 50,
        textAlign: "center",
        marginTop: 10,
        justifyContent: "space-between"
    },

    badgeText: {
        fontFamily: "adwa",
        color: colors.primaryDark,
        marginHorizontal: 5,
    }
})