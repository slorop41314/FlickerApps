import React, { Component, useState, useEffect } from 'react'
import { Text } from '../../components/Text'
// import { WebView } from 'react-native-webview';
const FeedDetail = () => {
    const [webLink, setWebLink] = useState()
    useEffect(() => {
        const { link } = navigation.state.params
        setWebLink(link)
    }, [])
    return (
        <View>
            <Text>Feed Detail</Text>
            <WebView source={{ uri: webLink }} />
        </View>
    )
}

export default FeedDetail