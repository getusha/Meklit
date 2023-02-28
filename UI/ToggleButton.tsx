import { useState } from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import * as IIcon from "react-native-vector-icons/Ionicons";
import colors from "../constants/colors";

export default function ToggleButton(props:
    {
        icon: string,
        title: string,
        successColor: string,
        successIcon: string,
        turnedOn?: boolean,
        onPress: (event: GestureResponderEvent) => void
    }) {
    // const [turnedOnToggle, setTurnedOnToggle] = useState<boolean>(props.turnedOn ?? false);

    // const handleToggle = () => {
    //     setTurnedOnToggle(!turnedOnToggle);
    //     props.onPress();
    // }

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.toggleButtonStyles}>
            <IIcon.default
                size={25}
                name={props.turnedOn ? props.successIcon : props.icon}
                color={props.turnedOn ? props.successColor : undefined} />
            <Text style={styles.toggleButtonTextStyles}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    toggleButtonStyles: {
        marginTop: "auto",
    },

    toggleButtonTextStyles: {
        fontSize: 10,
        fontFamily: "meaza",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "auto"
    }
}