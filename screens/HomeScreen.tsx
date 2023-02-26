import React, { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

import FilterSelector from "../components/FilterSelector";
import ItemPost from "../components/ItemPost";
import items from "../constants/items";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/Feather";
import * as IIcon from "react-native-vector-icons/Ionicons";
import meklit from "../assets/images/meklit.png";
import * as MIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomeScreen(): JSX.Element {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const PersonIcon = (props: any) => (
    <Icon {...props} name='person-outline' />
  );

  const BellIcon = (props: any) => (
    <Icon {...props} name='bell-outline' />
  );

  const EmailIcon = (props: any) => (
    <Icon {...props} name='email-outline' />
  );
  return (
    <React.Fragment>

      <ScrollView showsVerticalScrollIndicator style={styles.itemScrollContainer}>
        <FilterSelector />
        {items.map((item, idx) => {
          return <ItemPost item={item.item} user={item.user} />
        })}
      </ScrollView>

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

        <TouchableOpacity style={{
          height: "100%",
          width: "auto",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          margin: 10,
        }}>
          <MIcon.default size={30} color={colors.primaryLight} name="home" />
          <Text style={{ color: colors.primaryLight, fontFamily: "shiromeda", fontSize: 12 }}>መክሊት</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          height: "100%",
          width: "auto",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          margin: 10
        }}>
          <MIcon.default color={colors.primaryLight} size={30} name="fruit-grapes" />
          <Text style={{ color: colors.primaryLight, fontFamily: "shiromeda", fontSize: 12 }}>እቃዎቼ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
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
        }}>
          <Icon color={colors.primaryRed} size={30} name="plus" />
          {/* <Image style={{backgroundColor: colors.primaryLight, height: "100%", width: "100%", marginTop: "auto", marginBottom: "auto", borderRadius: 100 }} source={meklit} /> */}
        </TouchableOpacity>

        <TouchableOpacity style={{
          height: "100%",
          width: "auto",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          margin: 10,
        }}>
          <IIcon.default size={30} color={colors.primaryLight} name="chatbubble-sharp" />
          <Text style={{ color: colors.primaryGray, fontFamily: "shiromeda", fontSize: 12 }}>መልዕክት</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          height: "100%",
          width: "auto",
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          margin: 10,
        }}>
          <IIcon.default size={30} color={colors.primaryGray} name="notifications" />
          <Text style={{ color: colors.primaryGray, fontFamily: "shiromeda", fontSize: 12 }}>አሰሚ</Text>
        </TouchableOpacity>

      </View>

    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  itemScrollContainer: {
    backgroundColor: colors.secondaryLight,
    height: "100%"
  }
})