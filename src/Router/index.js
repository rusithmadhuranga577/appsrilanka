
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Platform, 
  Linking, 
  Alert, 
  BackHandler
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import {SplashScreen} from '@screens';
import {WebPage} from '@screens';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown : false}}/>
                <Stack.Screen name="WebPage" component={WebPage} options={{headerShown : false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;