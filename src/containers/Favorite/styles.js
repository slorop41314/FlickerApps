import React, { Component } from 'react'

import { StyleSheet } from 'react-native'
import { ColorList } from '../../utils/color'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        // height: 100,
        margin: 10,
        padding: 5,
        borderRadius: 5,
        backgroundColor: ColorList.white
    },
    feedImage: {
        width: "100%",
        height: 150
    },
    favIcon: {
        position: "absolute",
        top: 0,
        right: 3, color: "white"
    }
})