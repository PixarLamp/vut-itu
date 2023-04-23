//autor: Jakub Vano (xvanoj00)

import React from "react";
import "./App.css";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./screens/StartScreen";
import MenuScreen from "./screens/MenuScreen";
import GameScreen from "./screens/GameScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Start_Screen" component={StartScreen} />
        <Stack.Screen name="Menu_Screen" component={MenuScreen} />
        <Stack.Screen name="Game_Screen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
