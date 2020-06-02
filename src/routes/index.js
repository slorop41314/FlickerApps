import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../containers/Home';
import FeedDetail from '../containers/FeedDetail';
import { Constant } from '../utils/constant';
import Favorite from '../containers/Favorite';

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name={Constant.HOME_ROUTE_NAME} component={Home} />
                <Stack.Screen name={Constant.FEED_DETAIL_ROUTE_NAME} component={FeedDetail} />
                <Stack.Screen name={Constant.FAVORITE_ROUTE_NAME} component={Favorite} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
