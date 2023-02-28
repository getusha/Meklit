import React, { useEffect, useMemo, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, TopNavigation, Layout, IconRegistry, Button } from "@ui-kitten/components";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from "./screens/HomeScreen";
import colors from "./constants/colors";
import { FilterContext } from "./contexts/Contexts";
import SplashScreen from "react-native-splash-screen";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import logo from "./assets/images/logo.png";

function App(): JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar backgroundColor={colors.primaryBlue} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <TopNavigation
          style={styles.topHeader}
          alignment="center"
          accessoryLeft={
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image style={{ height: 30, width: 30, marginTop: "auto", marginBottom: "auto", backgroundColor: colors.primaryLight, borderRadius: 100 }} source={logo} />
              <Text style={styles.topHeaderTitle}>መክሊት</Text>
            </View>
          }
          accessoryRight={
            <Button size="giant" appearance="ghost">
              {() => <Icon size={20} color={colors.primaryLight} name="settings-sharp" />}
            </Button>
          }
        />
        <Layout>
          {/* <FilterSelector /> */}
          <HomeScreen />
        </Layout>
      </ApplicationProvider>
    </React.Fragment>
  )
}

export default App;

const styles = StyleSheet.create({
  topHeader: {
    minHeight: 35,
    maxHeight: 45,
    backgroundColor: colors.primaryBlue,
    color: colors.primaryLight,
    padding: 0
  },

  topHeaderTitle: {
    color: colors.primaryLight,
    fontFamily: "shiromeda",
    fontSize: 20,
    marginRight: "auto",
    marginHorizontal: 10,
    marginTop: "auto",
    marginBottom: "auto"
  }
})
