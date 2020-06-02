import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../containers/Home';
import FeedDetail from '../containers/FeedDetail';

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="FeedDetail" component={FeedDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
