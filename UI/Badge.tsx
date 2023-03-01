import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Badge(props: { title: string, icon?: string, theme?: "red" | "yellow" | "green" | "notheme" }) {
    return (
        <View style={
            [styles.badge,
            props.theme ?
                // sorry fellow developers it's fun at the moment
                (props.theme === "green" ? styles.badgeGreenTheme :
                    (props.theme === "yellow" ? styles.badgeOrangeTheme :
                        (props.theme === "red" ? styles.badgeRedTheme :
                            (props.theme === "notheme" ? undefined : undefined)))) : styles.badgeDefaultTheme]}
        >
            <Icon name={props.icon ?? "tag"} color={colors.primaryRed} />
            <Text style={styles.badgeText}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        padding: 5,
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

    badgeDefaultTheme: {
        backgroundColor: colors.primaryGray,
    },

    badgeOrangeTheme: {
        backgroundColor: colors.primaryYellow,
    },

    badgeRedTheme: {
        backgroundColor: colors.primaryRed,
        color: colors.primaryLight
    },

    badgeGreenTheme: {
        backgroundColor: colors.secondaryGreen,
        color: colors.primaryLight
    },

    badgeText: {
        fontFamily: "adwa",
        color: colors.primaryDark,
        marginHorizontal: 5,
    }
})