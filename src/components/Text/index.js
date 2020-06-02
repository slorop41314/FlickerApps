import React, { Component } from 'react'

import { Text as RNText, StyleSheet } from 'react-native'

const Text = (props) => {
    return <RNText style={[props.font == "title" && styles.title, props.style]}
        {...props}>
        {props.children}
    </RNText>
}
export default Text

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "700",
        marginVertical: 10
    }
})