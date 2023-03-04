import React, { useEffect } from 'react';
import { StatusBar, StyleSheet } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, TopNavigation, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from "./screens/HomeScreen";
import colors from "./constants/colors";
import SplashScreen from "react-native-splash-screen";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostsScreen from "./screens/PostsScreen";
import { navigationRef } from "./navigation/root";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import HeaderTitle from "./components/HeaderTitle";
import NewPostScreen from "./screens/NewPostScreen";

const Stack = createNativeStackNavigator();


function App(): JSX.Element {

  useEffect(() => SplashScreen.hide(), []);

  return (
    <NavigationContainer ref={navigationRef}>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar backgroundColor={colors.primaryBlue} />
      <ApplicationProvider
        {...eva} theme={eva.light}
      >
        <TopNavigation
          style={styles.topHeader}
          alignment="center"
          accessoryLeft={<HeaderTitle />}
          accessoryRight={<Icon size={20} color={colors.primaryLight} name="settings-sharp" />}
        />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "simple_push"
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PostsScreen" component={PostsScreen} />
          <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
        </Stack.Navigator>
        <BottomNavigation />
      </ApplicationProvider>
    </NavigationContainer>
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

})
