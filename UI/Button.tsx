import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../constants/colors";

export default function Button(props: { title: string }) {
    return (
        <TouchableOpacity style={styles.customButtonStyle}>
            <Icon size={20} name="chatbox" color={colors.primaryLight} />
            <Text style={styles.buttonTextStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    customButtonStyle: {
        width: "50%",
        backgroundColor: colors.primaryBlue,
        color: colors.primaryLight,
        height: 40,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderRadius: 5,
        paddingHorizontal: 40
    },

    buttonTextStyle: {
        fontFamily: "meaza",
        color: colors.primaryLight,
        fontSize: 15,
        fontWeight: "bold"
    }
})