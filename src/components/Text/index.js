import React, { Component } from 'react'

import { Text as RNText, StyleSheet } from 'react-native'

const Text = (props) => {
    const _getFont = (type) => {
        switch (type) {
            case "title":
                return styles.title
            default:
                return
        }
    }
    return <RNText style={[styles.default, _getFont(props.font), props.style]}
        {...props}>
        {props.children}
    </RNText>
}
export default Text

const styles = StyleSheet.create({
    default: {
        fontFamily: "OpenSans-Regular"
    },
    title: {
        fontSize: 18,
        marginVertical: 10,
        fontFamily: "OpenSans-SemiBold"
    }
})