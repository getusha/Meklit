import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import Button from "../UI/Button";
import Icon from "react-native-vector-icons/Ionicons";

export default function PostsScreen() {
    return (
        <ScrollView>
            <View style={styles.postItemContainer}>
                <View style={styles.postItemDetails}>
                    <View style={styles.postItemImageContainer}>
                        <Image
                            style={styles.postItemImage}
                            source={{ uri: "https://cdn.shopify.com/s/files/1/2312/7353/products/product-image-1617431754-sw_740x.jpg?v=1637294212" }}
                        />
                    </View>

                    <View style={styles.postItemReports}>
                        <Text style={styles.postItemTitle}>አዲስ ብዙም ያልተጠቀምኩበት ጃኬት</Text>
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
                                <Icon size={20} name="ios-eye-sharp" />
                                <Text style={{ marginHorizontal: 10 }}>ተመልካች</Text>
                            </View>
                            <Text>122</Text>
                        </View>

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
                                <Icon size={20} name="heart" />
                                <Text style={{ marginHorizontal: 10 }}>መውደድ</Text>
                            </View>
                            <Text>122</Text>
                        </View>

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
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Icon size={20} name="ios-eye-sharp" />
                                <Text style={{ marginHorizontal: 10 }}>እይታ</Text>
                            </View>
                            <Text>122</Text>
                        </View>


                    </View>
                </View>
                <View style={styles.postItemActionButtons}>
                    <Button style={{ width: "49%" }} icon="md-pencil-sharp" title="ለማስተካከል" />
                    <Button style={{ width: "49%" }} icon="trash" title="ለማጥፋት" color={colors.primaryRed} />
                </View>
            </View>

            <View style={styles.postItemContainer}>
                <View style={styles.postItemDetails}>
                    <View style={styles.postItemImageContainer}>
                        <Image
                            style={styles.postItemImage}
                            source={{ uri: "https://cdn.shopify.com/s/files/1/2312/7353/products/product-image-1617431754-sw_740x.jpg?v=1637294212" }}
                        />
                    </View>

                    <View style={styles.postItemReports}>
                        <Text style={styles.postItemTitle}>አዲስ ብዙም ያልተጠቀምኩበት ጃኬት</Text>
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
                                <Icon size={20} name="ios-eye-sharp" />
                                <Text style={{ marginHorizontal: 10 }}>ተመልካች</Text>
                            </View>
                            <Text>122</Text>
                        </View>

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
                                <Icon size={20} name="heart" />
                                <Text style={{ marginHorizontal: 10 }}>መውደድ</Text>
                            </View>
                            <Text>122</Text>
                        </View>

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
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Icon size={20} name="ios-eye-sharp" />
                                <Text style={{ marginHorizontal: 10 }}>እይታ</Text>
                            </View>
                            <Text>122</Text>
                        </View>


                    </View>
                </View>
                <View style={styles.postItemActionButtons}>
                    <Button style={{ width: "49%" }} icon="md-pencil-sharp" title="ለማስተካከል" />
                    <Button style={{ width: "49%" }} icon="trash" title="ለማጥፋት" color={colors.primaryRed} />
                </View>
            </View>

            <View style={styles.postItemContainer}>
                <View style={styles.postItemDetails}>
                    <View style={styles.postItemImageContainer}>
                        <Image
                            style={styles.postItemImage}
                            source={{ uri: "https://cdn.shopify.com/s/files/1/2312/7353/products/product-image-1617431754-sw_740x.jpg?v=1637294212" }}
                        />
                    </View>

                    <View style={styles.postItemReports}>
                        <Text style={styles.postItemTitle}>አዲስ ብዙም ያልተጠቀምኩበት ጃኬት</Text>
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
                                <Icon size={20} name="ios-eye-sharp" />
                                <Text style={{ marginHorizontal: 10 }}>ተመልካች</Text>
                            </View>
                            <Text>122</Text>
                        </View>

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
                                <Icon size={20} name="heart" />
                                <Text style={{ marginHorizontal: 10 }}>መውደድ</Text>
                            </View>
                            <Text>122</Text>
                        </View>

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
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Icon size={20} name="ios-eye-sharp" />
                                <Text style={{ marginHorizontal: 10 }}>እይታ</Text>
                            </View>
                            <Text>122</Text>
                        </View>


                    </View>
                </View>
                <View style={styles.postItemActionButtons}>
                    <Button style={{ width: "49%" }} icon="md-pencil-sharp" title="ለማስተካከል" />
                    <Button style={{ width: "49%" }} icon="trash" title="ለማጥፋት" color={colors.primaryRed} />
                </View>
            </View>
        </ScrollView>
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
        alignSelf: "flex-end"
    },

    postItemActionButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
})