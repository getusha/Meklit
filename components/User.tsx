import { Avatar, Layout } from "@ui-kitten/components";
import React from "react";
import { ImageURISource, StyleSheet, Text } from "react-native";

export default function User(props: {avatar: ImageURISource, name: string}) {
    return (
        <React.Fragment>
            <Layout style={styles.itemUserAvatarContainer}>
                <Avatar shape="round" source={props.avatar}></Avatar>
                <Text style={styles.itemUserName}>{props.name}</Text>
            </Layout>
        </React.Fragment>
    )
};

const styles = StyleSheet.create({
    itemUserAvatarContainer: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center"
    },

    itemUserName: {
        margin: 10,
        fontFamily: "shiromeda"
    },
})