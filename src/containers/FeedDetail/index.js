import React, { Component, useState, useEffect } from 'react'
import Text from '../../components/Text'
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import { Header } from '../../components/Header';
const FeedDetail = ({ navigation, route }) => {
    const [webLink, setWebLink] = useState()
    useEffect(() => {
        const { link } = route.params
        setWebLink(link)
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Header title="Feed Details" onPressLeft={() => navigation.pop()} />
            <WebView source={{ uri: webLink }} />
        </View>
    )
}

export default FeedDetail