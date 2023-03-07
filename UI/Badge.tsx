import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type BadgePropTypes = {
    title: string,
    icon?: string,
    theme?: "red" | "yellow" | "green" | "notheme",
}

export default function Badge(props: BadgePropTypes) {
    const isRedTheme = props.theme === "red";
    const isGreenTheme = props.theme === "green";
    const isYellowTheme = props.theme === "yellow";
    const isDefaultTheme = props.theme === "notheme";


    return (
        <View style={
            [styles.badge,
            props.theme ?
                // sorry fellow developers it was fun nesting this at the moment
            (isGreenTheme ? styles.badgeGreenTheme :
            (isYellowTheme ? styles.badgeOrangeTheme :
            (isRedTheme ? styles.badgeRedTheme :
            (isDefaultTheme && {})))) : styles.badgeDefaultTheme]}
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