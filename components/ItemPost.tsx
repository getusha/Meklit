import { Button, ButtonGroup, Layout } from "@ui-kitten/components";
import React from "react";
import { Image, ImageURISource, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Icon } from "@ui-kitten/components";
import colors from "../constants/colors";
import Badge from "../UI/Badge";
import User from "./User";
import meklit from "../assets/images/meklit.png";

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
    return (
        <React.Fragment>
            <Layout style={styles.itemContainerCard}>
                <Layout style={styles.itemContainerLayout}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <User userAvatar={user.avatar} userName={user.name} />
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.itemTitleText}>{item.title}</Text>
                    </View>

                    <Layout style={styles.itemImageContainer}>
                        <Image style={styles.itemImage} source={{ uri: item.image }} />
                    </Layout>
                    <View style={styles.badgeContainer}>
                        {item.labels.map((label) => {
                            return <Badge title={label} />
                        })}
                    </View>

                    <Layout style={{ display: "flex", flexDirection: "row", alignContent: "space-between" }}>
                        {/* <ButtonGroup appearance="filled" size="medium" style={{ display: "flex", justifyContent: "space-between", marginTop: 10, width: "100%" }}> */}
                        <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                            <TouchableOpacity>
                                <Image style={{ height: 30, width: 30, marginTop: "auto", marginBottom: "auto", backgroundColor: colors.primaryLight, borderRadius: 100 }} source={meklit} />
                            </TouchableOpacity>
                            <Button appearance="ghost" >
                                {""}
                                {/* {() =>
                                    <Layout style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center" }}>
                                        <Icon size={17} name="heart-outline" />
                                    </Layout>
                                } */}
                            </Button>
                            <Button
                                accessoryRight={<Icon size={20} name="arrowhead-right-outline" />}
                                appearance="ghost"
                                size="medium"
                            >
                                {() => <Text style={{ fontFamily: "sadis", fontSize: 20 }}>እንቀያየር</Text>}
                            </Button>
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
        paddingHorizontal: 5,
        paddingVertical: 5,
        margin: 10,
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