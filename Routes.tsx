import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./Layout/MainScreen";
import DetailScreen from "./Layout/DetailScreen";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Platform.OS !== "web" ? (
          <Stack.Screen name="Main" component={MainScreen} />
        ) : (
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
        )}

        {Platform.OS !== "web" ? (
          <Stack.Screen name="Details" component={DetailScreen} />
        ) : (
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
