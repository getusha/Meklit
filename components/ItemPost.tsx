import { ButtonGroup, Layout } from "@ui-kitten/components";
import React, { useState } from "react";
import { Image, ImageURISource, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Icon } from "@ui-kitten/components";
import * as IIcon from "react-native-vector-icons/Ionicons";
import colors from "../constants/colors";
import Badge from "../UI/Badge";
import User from "./User";
import meklit from "../assets/images/meklit.png";
import Button from "../UI/Button";
import ToggleButton from "../UI/ToggleButton";

type ItemPostPropTypes = {
    item: {
        title: string;
        image: string;
        labels: string[];
    },

    user: {
        name: string;
        avatar: string;
    }
}

export default function ItemPost({ item, user }: ItemPostPropTypes) {
    const [likedPost, setLikedPost] = useState<boolean>(false);
    const [disLikedPost, setDisLikedPost] = useState<boolean>(false);

    return (
        <React.Fragment>
            <Layout style={styles.itemContainerCard}>
                <Layout style={styles.itemContainerLayout}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <User userAvatar={user.avatar} userName={user.name} />
                        <Badge icon="car" theme="notheme" title={"የሚሸጥ"} />
                    </View>

                    <Layout style={styles.itemImageContainer}>
                        <Image style={styles.itemImage} source={{ uri: item.image }} />
                    </Layout>

                    <View style={styles.badgeContainer}>
                        {item.labels.map((label) => {
                            return <Badge title={label} />
                        })}
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.itemTitleText}>{item.title}</Text>
                    </View>

                    <Layout style={{ display: "flex", flexDirection: "row", alignContent: "space-between", marginTop: 20 }}>
                        {/* <ButtonGroup appearance="filled" size="medium" style={{ display: "flex", justifyContent: "space-between", marginTop: 10, width: "100%" }}> */}
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                            <ToggleButton
                                title="112"
                                icon="heart-outline"
                                successColor={colors.primaryRed}
                                successIcon="heart"
                                turnedOn={likedPost}
                                onPress={() => {
                                    setDisLikedPost(false)
                                    setLikedPost(!likedPost)
                                }}
                            />

                            <ToggleButton
                                title="112"
                                icon="ios-thumbs-down-sharp"
                                successColor={colors.primaryBlue}
                                successIcon="ios-thumbs-down-sharp"
                                turnedOn={disLikedPost}
                                onPress={() => {
                                    setLikedPost(false)
                                    setDisLikedPost(!disLikedPost)
                                }}
                            />

                            <Button title="እንቀያየር" />
                        </View>
                        {/* </ButtonGroup> */}
                    </Layout>
                </Layout>
            </Layout>
        </React.Fragment>
    )
}


const styles = StyleSheet.create({
    itemTitleText: {
        // fontFamily: "shiromeda",
        fontSize: 16,
        // letterSpacing: -1,
        color: colors.primaryDark
    },

    itemContainerCard: {
        elevation: 0,
        borderWidth: 0,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        borderRadius: 5
    },

    itemContainerLayout: {
        flex: 1, flexDirection: "column"
    },

    itemImageContainer: {
        height: 200,
        width: "100%"
    },

    itemImage: {
        height: "100%",
        width: "100%",
        resizeMode: "contain"
    },

    badgeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5
    },

    sliderItemImageContainer: {
        width: 150,
        height: 200,
        marginVertical: 10,
        marginHorizontal: 2,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 10
    },

    sliderItemImage: {
        height: 130,
        width: 130,
        resizeMode: "contain"
    },

    itemsSliderContainer: {
        width: "100%",
        height: 200
    }
})