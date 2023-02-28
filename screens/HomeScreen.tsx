import React, { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

import FilterSelector from "../components/FilterSelector";
import ItemPost from "../components/ItemPost";
import items from "../constants/items";
import Icon from "react-native-vector-icons/Feather";
import * as IIcon from "react-native-vector-icons/Ionicons";
import meklit from "../assets/images/meklit.png";
import * as MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";

export default function HomeScreen(): JSX.Element {

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <React.Fragment>

      <ScrollView showsVerticalScrollIndicator style={styles.itemScrollContainer}>
        <FilterSelector />
        {items.map((item, idx) => {
          return <ItemPost item={item.item} user={item.user} />
        })}
      </ScrollView>

      <BottomNavigation />

    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  itemScrollContainer: {
    backgroundColor: colors.secondaryLight,
    height: "100%"
  }
})
