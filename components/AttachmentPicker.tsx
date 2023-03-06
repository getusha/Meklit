// import BottomSheet from "@gorhom/bottom-sheet";
import { NativeSyntheticEvent, StyleSheet } from "react-native";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "react-native-image-picker";

type AttachmentPickerTypes = {
    showPickerMenu: boolean,
    togglePickerMenu: (event: NativeSyntheticEvent<any>) => void,
    onAttachmentPicked: () => void,
}


export default function AttachmentPicker(props: AttachmentPickerTypes) {

    function handleLaunchCamera() {
        ImagePicker.launchCamera({ mediaType: "photo" },
            props.onAttachmentPicked);
    }

    function handleOpenImageLibrary() {
        ImagePicker.launchImageLibrary({ mediaType: "photo" },
            props.onAttachmentPicked);
    }

    return (
        <View>
            <Modal
                transparent
                visible={props.showPickerMenu}
                onRequestClose={props.togglePickerMenu}
                animationType="slide"
            >

                <TouchableOpacity onPress={props.togglePickerMenu}>
                    <View style={{ height: "100%", width: "100%" }} />
                </TouchableOpacity>

                <View style={
                    {
                        height: "25%",
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        width: "100%",
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "auto",
                        backgroundColor: colors.primaryLight
                    }}>

                    <TouchableOpacity onPress={handleLaunchCamera} style={styles.pickerMenuItem}>
                        <Icon name="camera" size={18} color={colors.secondaryLight} />
                        <Text style={styles.pickerMenuItemText}>የዕቃውን ፎቶ ለማንሳት</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleOpenImageLibrary} style={styles.pickerMenuItem}>
                        <Icon name="ios-file-tray" size={18} color={colors.secondaryLight} />
                        <Text style={styles.pickerMenuItemText}>ነባር ፎቶ ለመፈለግ</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
    },
    pickerMenuItemText: {
        color: colors.secondaryLight,
        fontFamily: "adwa",
        marginHorizontal: 10
    }
})