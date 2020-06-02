import React from 'react'
import { View, Image as RNImage, StyleSheet } from 'react-native'

export const Image = (props) => {
    return (
        <RNImage {...props} resizeMode="stretch" />
    )
}

const styles = StyleSheet.create({

})