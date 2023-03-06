import { Layout } from "@ui-kitten/components";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import Badge from "../UI/Badge";
import User from "./User";
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

    function handleReaction(positive: boolean = true) {
        if (positive) {
            setDisLikedPost(false)
            setLikedPost(!likedPost)
        } else {
            setLikedPost(false);
            setDisLikedPost(!disLikedPost)
        }
    }

    return (
        <React.Fragment>
            <Layout style={styles.itemContainerCard}>
                <Layout style={styles.itemContainerLayout}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
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

                    <Layout style={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "space-between",
                        marginTop: 20
                    }}>
                        <View style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>

                            <ToggleButton
                                title="112"
                                icon="heart-outline"
                                successColor={colors.primaryRed}
                                successIcon="heart"
                                turnedOn={likedPost}
                                onPress={() => handleReaction()}
                            />

                            <ToggleButton
                                title="112"
                                icon="ios-thumbs-down-sharp"
                                successColor={colors.primaryBlue}
                                successIcon="ios-thumbs-down-sharp"
                                turnedOn={disLikedPost}
                                onPress={() => handleReaction(false)}
                            />

                            <Button title="እንቀያየር" />
                        </View>
                    </Layout>
                </Layout>
            </Layout>
        </React.Fragment>
    )
}


const styles = StyleSheet.create({
    itemTitleText: {
        fontSize: 16,
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
        flex: 1,
        flexDirection: "column"
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