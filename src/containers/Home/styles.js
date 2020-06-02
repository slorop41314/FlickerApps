import React, { Component } from 'react'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    topHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    header: {
        backgroundColor: "white",
        borderRadius: 10
    },
    category: {
        marginVertical: 10
    },
    container: {
        flex: 1,
        padding: 10
    },
    feedWrap: {
        flex: 1,
        height: 100,
        margin: 5
    },
    feedImage: {
        width: "100%",
        height: "100%"
    },
    favIcon: {
        position: "absolute",
        top: 0,
        right: 3, color: "white"
    }
})