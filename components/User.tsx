import { Avatar, Layout } from "@ui-kitten/components";
import React from "react";
import { ImageSourcePropType, ImageURISource, StyleSheet, Text, View } from "react-native";

export default function User(props: { userAvatar: string, userName: string }) {
    return (
        <React.Fragment>
            <Layout style={styles.itemUserAvatarContainer}>
                <Avatar shape="rounded" source={{ uri: props.userAvatar }}></Avatar>
                <View style={{height: "40%",  marginHorizontal: 10,}}>
                    <Text style={styles.itemUserName}>{props.userName}</Text>
                    <Text>ከ5 ደቂቃ በፊት</Text>
                </View>
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
        // fontWeight: "bold",
        fontFamily: "meaza"
    },
})