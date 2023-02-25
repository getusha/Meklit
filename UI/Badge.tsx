import { StyleSheet, Text } from "react-native";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Badge(props: { title: string }) {
    return (
        <Text style={styles.badge}>
            <Icon name="tag" />
            {props.title}
        </Text>
    );
}

const styles = StyleSheet.create({
    badge: {
        padding: 5,
        backgroundColor: colors.primaryDark,
        display: "flex",
        flexWrap: "wrap",
        borderRadius: 5,
        margin: 1,
        fontFamily: "shiromeda",
        color: colors.primaryLight,
        fontSize: 12,
        minWidth: 50,
        textAlign: "center",
        justifyContent: "space-between"
      }
})