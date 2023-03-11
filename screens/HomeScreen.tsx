import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import colors from "../constants/colors";

import FilterSelector from "../components/FilterSelector";
import ItemPost from "../components/ItemPost";
import items from "../constants/items";

export default function HomeScreen(): JSX.Element {
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShouldRender(true)
    }, 50);
  }, []);

  return (
    <React.Fragment>
      {!shouldRender &&
        <ActivityIndicator style={{
          height: "100%",
          width: "100%" }} />
      }
      {shouldRender && (
        <ScrollView
          showsVerticalScrollIndicator
          style={styles.itemScrollContainer}>
          <FilterSelector />
          {items.map((item, idx) => {
            return <ItemPost key={idx} item={item.item} user={item.user} />
          })}
        </ScrollView>
      )}
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  itemScrollContainer: {
    backgroundColor: colors.secondaryLight,
    height: "100%"
  }
})
