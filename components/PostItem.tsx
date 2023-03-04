import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import Button from "../UI/Button";
import Icon from "react-native-vector-icons/Ionicons";

type PostItemTypes = {
    title: string;
    imageUri: string;
    itemReport: {
        views: { text: string; count: number; },
        likes: { text: string; count: number; },
        dislikes: { text: string; count: number; }
    };
}

type PostReportBadgeTypes = {
    name: string;
    icon: string;
    value: number;
}

function PostReportBadge(props: PostReportBadgeTypes) {
    return (
        <View style={
            {
                display: "flex",
                padding: 10,
                marginTop: 10,
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                backgroundColor: colors.primaryGray,
                borderRadius: 5
            }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Icon size={20} name={props.icon} />
                <Text style={{ marginHorizontal: 10 }}>{props.name}</Text>
            </View>
            <Text>{props.value}</Text>
        </View>
    )
}

export default function PostItem(props: PostItemTypes) {
    return (
        <View style={styles.postItemContainer}>
            <View style={styles.postItemDetails}>
                <View style={styles.postItemImageContainer}>
                    <Image
                        style={styles.postItemImage}
                        source={{ uri: props.imageUri }}
                    />
                </View>

                <View style={styles.postItemReports}>
                    <View>
                        <Text style={{ marginLeft: "auto" }}>ርዕስ</Text>
                        <Text style={styles.postItemTitle}>{props.title}</Text>
                    </View>

                    <PostReportBadge
                        icon="ios-eye-sharp"
                        name={props.itemReport.views.text}
                        value={props.itemReport.views.count} />

                    <PostReportBadge
                        icon="heart"
                        name={props.itemReport.likes.text}
                        value={props.itemReport.likes.count} />

                    <PostReportBadge
                        icon="thumbs-down-sharp"
                        name={props.itemReport.dislikes.text}
                        value={props.itemReport.dislikes.count} />

                </View>
            </View>
            <View style={styles.postItemActionButtons}>
                <Button style={{ width: "38%", paddingHorizontal: 20 }} icon="trash" title="ለማጥፋት" color={colors.primaryRed} />
                <Button style={{ width: "60%" }} icon="md-pencil-sharp" title="ለማስተካከል" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postItemContainer: {
        backgroundColor: "white",
        margin: 5,
        padding: 5
    },

    postItemDetails: {
        display: "flex",
        flexDirection: "row",
    },

    postItemImage: {
        height: "100%",
        width: "100%",
        resizeMode: "contain"
    },

    postItemImageContainer: {
        width: "40%",
        height: 200
    },

    postItemReports: {
        width: "60%",
        justifyContent: "center"
    },

    postItemTitle: {
        fontFamily: "shiromeda",
        alignSelf: "flex-end",
    },

    postItemActionButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    }
})