import React, { useState } from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as IIcon from "react-native-vector-icons/Ionicons";
import * as MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../constants/colors";
import { NAV_MENUS } from "../../constants/CONST";

const BOTTOM_NAV_MENUS = ["መክሊት", "እቃዎቼ", "", "መልዕክት", "አሰሚ"];
const BOTTOM_NAV_CHILDS = ["home", "fruit-grapes", "plus", "chatbubble-sharp", "notifications"];

type BottomNavButtonType = {
    title?: string,
    children: React.ReactNode,
    isMain?: boolean,
    onPress?: ((event: GestureResponderEvent) => void) | undefined,
    useMaterial?: boolean,
    iconName?: string,
    itemColor?: string,
    selected: boolean
}

function BottomNavButton({ title, children, isMain, onPress, useMaterial, iconName, itemColor, selected }: BottomNavButtonType) {
    return (
        <TouchableOpacity onPress={onPress} style={isMain ? styles.mainBottomNavButton 
        : [styles.bottomNavItem
            // {borderBottomColor: "white", borderBottomWidth: 3, borderRadius: 4} : undefined
        
        ]
        }>
            {iconName && (useMaterial ?
                    <MIcon.default size={30} color={!isMain ? itemColor : colors.primaryRed} name={iconName} /> :
                    <IIcon.default size={30} color={!isMain ? itemColor : colors.primaryRed} name={iconName} />)
            }
            {title && !isMain && <Text style={{ color: selected ? colors.secondaryGreen : colors.primaryGray, fontFamily: "shiromeda", fontSize: 12 }}>{title}</Text>}
        </TouchableOpacity>
    )
}

export default function BottomNavigation() {

    const [selectedTab, setSelectedTab] = useState<number>(0);

    return (
        <View style={{
            height: 70,
            bottom: 115,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 8,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: colors.primaryBlue
        }}>

            {NAV_MENUS.map((navMenu, idx)=>{
                return(
                    <BottomNavButton
                        key={navMenu.title}
                        title={navMenu.title}
                        isMain={!navMenu.title}
                        onPress={() => setSelectedTab(idx)}
                        useMaterial={[1, 2].includes(idx)}
                        iconName={navMenu.icon}
                        itemColor={selectedTab == idx ? colors.primaryLight : colors.primaryGray}
                        selected={selectedTab == idx}
                    >
                    </BottomNavButton>
                )
            })}

            {/* {BOTTOM_NAV_MENUS.map((bNavmenu, idx) => {
                return (
                    <BottomNavButton
                        key={bNavmenu}
                        title={bNavmenu}
                        isMain={!bNavmenu}
                        onPress={() => setSelectedTab(idx)}
                        useMaterial={[1, 2].includes(idx)}
                        iconName={BOTTOM_NAV_CHILDS[idx]}
                        itemColor={selectedTab == idx ? colors.primaryLight : colors.primaryGray}
                        selected={selectedTab == idx}
                    >
                    </BottomNavButton>
                )
            })} */}
        </View>
    )
}

const styles = StyleSheet.create({
    mainBottomNavButton: {
        height: "100%",
        width: "auto",
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        margin: 10,
        minWidth: 55,
        borderRadius: 10,
        backgroundColor: colors.primaryLight
    },

    bottomNavItem: {
        height: "100%",
        width: "auto",
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        margin: 10,
    }
})