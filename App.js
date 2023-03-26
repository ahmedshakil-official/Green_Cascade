import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthNavigator from "./app/components/navigation/AuthNavicator";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import navigationTheme from "./app/components/navigation/navigationTheme";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppNavigator from "./app/components/navigation/AppNavigator";
import AccountNavigator from "./app/components/navigation/AccountNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      
      {/* <ViewImageScreen/> */}
      {/* <AppNavigator /> */}
      <AuthNavigator/>
    </NavigationContainer>
  );
}
