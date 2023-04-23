//*****************************************//
//                                         //
// file: App.js                            //
// author: xvanoj00 - Jabub Vaňo           //
// date: 12/5/2021                         //
//                                         //
//*******************************************


import React from 'react';
import './App.css';
import { NavigationContainer } from '@react-navigation/native'
import MainPage from './components/mainPage';
import gamePage from './components/gamePage';
import Game from './components/Game'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//setup for screen switching
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* main/entry page */}
        <Stack.Screen
          name="mainPage" 
          component={MainPage}
        />
        {/* page for setting up game boards */}
        <Stack.Screen
          name="gamePage"
          component={gamePage}
        />
        {/* page where the game is taking place */}
        <Stack.Screen
          name="Game"
          component={Game}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;