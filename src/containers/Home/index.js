import React, { useState, useEffect } from 'react'
import Text from '../../components/Text'
import { View, FlatList, TouchableOpacity, RefreshControl } from 'react-native'
import { Header, Item, Input, Icon, Button } from 'native-base';
import { styles } from './styles';
import { fetchFeedData } from '../../service/NetworkService/HomeNetworkService';
import { toggleFavorite } from '../../service/LocalService/FavoriteService';
import { Image } from '../../components/Image';
import { ColorList } from '../../utils/color';
import { Constant } from '../../utils/constant';

const Home = ({ navigation }) => {
    let [feedData, setFeedData] = useState([])
    const [search, setSearch] = useState("")
    let [pageNum, setPageNum] = useState(1)
    useEffect(() => {
        _fetchData(1)
    }, [])

    //Function for fetching data
    const _fetchData = async (num) => {
        setPageNum(num + 1)
        const res = await fetchFeedData(search, num)
        if (res.status == 200) {
            let data = []
            if (num == 1) {
                data = res.data.items
            } else {
                data = [...feedData, ...res.data.items]
            }
            setFeedData(data)
        } else { setFeedData([]) }
    }

    //Function called when user press the header search button 
    const _searchButtonPressed = () => {
        setPageNum(1)
        _fetchData(1)
    }

    //Function called when flatlist reach the treshold
    const _fetchMoreData = () => {
        _fetchData(pageNum)
    }

    //Function called when user pressed the card
    const _onPressFeed = (item) => {
        // Get feed item for navigation param
        navigation.push("FeedDetail", { link: item.link })
    }

    const _addToFavorite = (item) => {
        toggleFavorite(item)
        const newFeed = [...feedData]
        const indexNum = newFeed.findIndex(oldData => oldData == item)
        if (newFeed[indexNum].isFav) {
            newFeed[indexNum].isFav = false
        } else {
            newFeed[indexNum].isFav = true
        }
        setFeedData(newFeed)
    }

    const _renderFlatlistContent = ({ item }) => {
        return (
            <View style={styles.feedWrap} >
                <TouchableOpacity onPress={() => _onPressFeed(item)}>
                    <Image style={styles.feedImage} source={{ uri: item.media.m }} />
                </TouchableOpacity>
                <Icon onPress={() => _addToFavorite(item)} name="heart" style={[styles.favIcon, item.isFav && { color: ColorList.red }]} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.topHeader}>
                <Text font="title">Home</Text>
                <Icon onPress={() => navigation.push(Constant.FAVORITE_ROUTE_NAME)} name="heart" style={{ color: ColorList.red }} />
            </View>
            <Header searchBar rounded style={styles.header}>
                <Item>
                    <Input
                        value={search}
                        onChangeText={text => setSearch(text)}
                        placeholder="Search by tags"
                    />
                    <Button transparent onPress={_searchButtonPressed}>
                        <Icon name="ios-search" />
                    </Button>
                </Item>
            </Header>
            <View style={{ flex: 1 }}>
                <FlatList
                    refreshControl={<RefreshControl refreshing={false} onRefresh={() => _searchButtonPressed()} />}
                    numColumns={3}
                    data={feedData}
                    onEndReached={_fetchMoreData}
                    onEndReachedThreshold={0.6}
                    renderItem={_renderFlatlistContent}
                    keyExtractor={(_, id) => id.toString()}
                />
            </View>
        </View>
    )
}

export default Home