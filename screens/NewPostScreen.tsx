import { IndexPath, Input, Radio, RadioGroup, Select, SelectItem } from "@ui-kitten/components";
import { Modal, PermissionsAndroid, StyleSheet, Text, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import AttachmentPicker from "../components/AttachmentPicker";
// import BottomSheet from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/Ionicons";
import filterList from "../constants/filterList";
import * as IonIcons from "react-native-vector-icons/Ionicons";
import * as MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"

/**
 * 
 * USING TYPESCRIPT WAS THE WORST DESCISION I HAVE
 * EVER MADE
 */

export default function NewPostScreen() {
    const [postTitle, setPostTitle] = useState<string>("");
    const [error, setError] = useState<string>("");

    const [pickerVisibilty, setPickerVisibility] = useState<boolean>(false);

    const [selectedModeIndex, setSelectedModeIndex] = useState<number>(0);
    const [selectedCategory, setSelectedCategory] = useState();

    function _toggleAttachmentPicker() {
        setPickerVisibility(!pickerVisibilty);
    }

    function handlePostSubmission() {
        const postData = {
            title: postTitle,
            forExchange: selectedModeIndex === 1,
            imageUri: "",
            itemReport: {
                views: { count: 0 },
                likes: { count: 0 },
                dislikes: { count: 0 }
            }
        }
    }

    const renderIcon = ({ item, index }: {
        item: {
            title: string,
            icon: string,
            color: string,
            materialIcon?: boolean
        },
        index: number
    }) => {
        if (item.materialIcon) {
            return (
                <MaterialIcon.default
                    name={item.icon}
                    size={18}
                    color={item.color}
                />
            )
        } else {
            return (
                <IonIcons.default
                    name={item.icon}
                    size={18}
                    color={item.color}
                />
            )
        }
    };

    return (
        <View style={{ height: "100%" }}>
            <AttachmentPicker
                showPickerMenu={pickerVisibilty}
                togglePickerMenu={_toggleAttachmentPicker}
            />

            <Input
                multiline
                style={{
                    padding: 10,
                    minHeight: 50
                }}
                placeholder="ርዕስ"
                value={postTitle}
                onChange={val => setPostTitle(val.nativeEvent.text)}
            />

            <Select
                selectedIndex={selectedCategory}
                // @ts-ignore
                // i have no idea why it's not working tried parsing the index
                // tried new IndexPath(index) no luck
                // houts wasted: 0.15
                onSelect={index => setSelectedCategory(index)}
                value={() => {
                    if (!selectedCategory) return (
                        <Text style={{ fontSize: 17, marginLeft: 5 }}>
                            {/* @ts-ignore */}
                            የዕቃ አይነት
                        </Text>
                    );
                    return (
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            {/* @ts-ignore */}
                            {renderIcon({ item: filterList[parseInt(selectedCategory)], index: selectedCategory })}
                            <Text style={{ fontSize: 17, marginLeft: 5 }}>
                                {/* @ts-ignore */}
                                {filterList[parseInt(selectedCategory)].title}
                            </Text>
                        </View>
                    )
                }}
                placeholder="የዕቃ አይነት"
                style={{ margin: 10 }}
            >
                {filterList.slice(1).map((fItem, idx) => {
                    return <SelectItem title={() => {
                        return (
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                                {renderIcon({ item: fItem, index: idx })}
                                <Text style={{ fontSize: 15, marginLeft: 7 }}>{fItem.title}</Text>
                            </View>
                        )
                    }} />
                })}
            </Select>

            <RadioGroup
                selectedIndex={selectedModeIndex}
                onChange={idx => setSelectedModeIndex(idx)}
                style={{
                    padding: 7,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Radio style={{
                    padding: 10,
                    margin: 5,
                    backgroundColor: colors.primaryGray,
                    borderRadius: 5,
                    width: "48%"
                }}
                >
                    <Text>ለመቀየር</Text>
                </Radio>

                <Radio style={{
                    padding: 10,
                    backgroundColor: colors.primaryGray,
                    borderRadius: 5,
                    margin: 5,
                    width: "48%"
                }}>
                    <Text>ለመሸጥ</Text>
                </Radio>
            </RadioGroup>

            <TouchableOpacity
                onPress={_toggleAttachmentPicker}
                style={styles.launchPickerMenuBtn}
            >
                <Icon size={18} name="images" />
                <Text style={{ marginHorizontal: 30 }}>የዕቃውን ፎቶ ለማድረግ</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePostSubmission} style={styles.pickerMenuItem}>
                <Icon name="megaphone-outline" size={18} color={colors.secondaryLight} />
                <Text style={styles.postButton}>ዕቃውን ለመልቀቅ</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    pickerMenuItem: {
        width: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        margin: 10,
        borderRadius: 10,
        backgroundColor: colors.primaryBlue,
        marginTop: "auto"
    },

    postButton: {
        color: colors.secondaryLight,
        fontFamily: "shiromeda",
        marginHorizontal: 10
    },

    launchPickerMenuBtn: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.primaryGray,
        height: 50,
        margin: 10,
        paddingHorizontal: 20
    }
})