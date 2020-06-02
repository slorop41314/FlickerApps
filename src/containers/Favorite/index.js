import React, { useState, useEffect } from 'react'
import Text from '../../components/Text'
import { View, FlatList, TouchableOpacity, RefreshControl } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base';
import { styles } from './styles';
import { toggleFavorite, getFavoriteInStorage } from '../../service/LocalService/FavoriteService';
import { Image } from '../../components/Image';
import { ColorList } from '../../utils/color';
import { Constant } from '../../utils/constant';
import { Header } from '../../components/Header';

const Favorite = ({ navigation }) => {
    const [favData, setFavData] = useState([])
    useEffect(() => {
        _fetchData()
    }, [])

    //Function for fetching data
    const _fetchData = async () => {
        const data = await getFavoriteInStorage()
        setFavData(data)
    }

    //Function called when user pressed the card
    const _onPressFeed = (item) => {
        // Get feed item for navigation param
        navigation.push(Constant.FEED_DETAIL_ROUTE_NAME, { link: item.link })
    }

    const _addToFavorite = async(item) => {
        const newFav = await toggleFavorite(item)
        setFavData(newFav)
    }
    return (
        <View style={styles.container}>
            <Header title="Favorite list" onPressLeft={() => navigation.pop()} />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={favData}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.card} >
                                <TouchableOpacity onPress={() => _onPressFeed(item)}>
                                    <Image style={styles.feedImage} source={{ uri: item.media.m }} />
                                </TouchableOpacity>
                                <Icon onPress={() => _addToFavorite(item)} name="heart" style={[styles.favIcon, { color: ColorList.red }]} />
                                <Text>{item.title}</Text>
                                <Text>{item.author}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={(_, id) => id.toString()}
                />
            </View>
        </View>
    )
}

export default Favorite