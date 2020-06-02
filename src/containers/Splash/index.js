import React, { Component, useEffect } from 'react'

import { View, StyleSheet } from 'react-native'
import { Image } from '../../components/Image'
import { Constant } from '../../utils/constant'
import Text from '../../components/Text'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace(Constant.HOME_ROUTE_NAME)
        }, 2000);
    })
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/images/logo.png")} />
            <Text>Share Your Photo</Text>
        </View>
    )
}
export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: "contain"
    }
})