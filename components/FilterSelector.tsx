import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { ListItem, List } from "@ui-kitten/components";
import * as IonIcons from "react-native-vector-icons/Ionicons";
import * as MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
import filterList from "../constants/filterList";
import { StyleSheet } from "react-native";
import colors from "../constants/colors";
import LocalStorage from "../utils/LocalStorage";

type listItemTypes = {
    item: {
        title: string,
        icon: string,
        color: string,
        materialIcon?: boolean
    };
    index: number;
}

const localFilterIndex = LocalStorage.getNumber("FILTER_ITEMS_INDEX");

function FilterSelector() {
    const [filterIndex, setFilterIndex] = useState(localFilterIndex ?? 0);

    const handleFilterPress = async (index: number) => {
        setFilterIndex(index);
    };

    useEffect(() => {
        // updating the context state has delay
        // and i am not comfortable with the ui delay to reflect the selected item style
        // so let's work arround this executing in a timeout
        LocalStorage.set("FILTER_ITEMS_INDEX", filterIndex)
    }, [filterIndex])

    const renderTitle = ({ item, index }: listItemTypes) => (
        <Text style={[styles.titleStyle, index === filterIndex ? styles.listItemSelectedText : {}]}>{item.title}</Text>
    );

    const renderIcon = ({ item, index }: listItemTypes) => {
        if (item.materialIcon) {
            return (
                <MaterialIcon.default
                    name={item.icon}
                    size={15}
                    color={index === filterIndex ? "white" : item.color}
                />
            )
        } else {
            return (
                <IonIcons.default
                    name={item.icon}
                    size={15}
                    color={index === filterIndex ? "white" : item.color}
                />
            )
        }
    };

    const renderItem = ({ item, index }: listItemTypes) => (
        <ListItem
            key={index}
            onPress={() => handleFilterPress(index)}
            style={[styles.listItem, index === filterIndex && styles.listItemSelected]}
            title={() => renderTitle({ item, index })}
            accessoryLeft={() => renderIcon({ item, index })}
        />
    );

    return (
        <React.Fragment>
            <List
                style={styles.listItemContainer}
                horizontal
                data={filterList}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
            />
        </React.Fragment>
    )
};

export default React.memo(FilterSelector);

const styles = StyleSheet.create({
    titleStyle: {
        fontFamily: "adwa",
        marginLeft: 10
    },

    listItem: {
        borderRadius: 50,
        padding: 0,
        paddingVertical: 5,
        marginHorizontal: 5
    },

    listItemSelected: {
        backgroundColor: colors.primaryBlue,
        borderRadius: 50,
        padding: 40
    },

    listItemSelectedText: {
        color: colors.primaryLight,
    },

    listItemContainer: {
        elevation: 1,
        backgroundColor: "transparent",
        paddingVertical: 10
    }
})