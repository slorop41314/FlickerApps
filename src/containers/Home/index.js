import React, { Component, useState, useEffect } from 'react'
import Text from '../../components/Text'
import { View, TextInput, FlatList, TouchableOpacity, RefreshControl } from 'react-native'
import { Header, Item, Input, Icon, Button } from 'native-base';
import { styles } from './styles';
import { fetchFeedData } from '../../service/NetworkService/HomeNetworkService';
import { Image } from '../../components/Image';
const Home = ({ navigation }) => {
    const [feedData, setFeedData] = useState([])
    const [search, setSearch] = useState("")
    let [pageNum, setPageNum] = useState(1)
    useEffect(() => {
        _fetchData(1)
    }, [])

    //Function for fetching data
    const _fetchData = async (num) => {
        const res = await fetchFeedData(search, num)
        if (res.status == 200) {
            setPageNum(pageNum++)
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
        const nextPage = pageNum++
        _fetchData(nextPage)
    }

    //Function called when user pressed the card
    const _onPressFeed = (item) => {
        // Get feed item for navigation param
        navigation.push("FeedDetail", { link: item.link })
    }
    return (
        <View style={styles.container}>
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
                {!search && <Text font="title">All</Text>}
                <FlatList
                    refreshControl={<RefreshControl refreshing={false} onRefresh={() => _searchButtonPressed()} />}
                    numColumns={3}
                    data={feedData}
                    onEndReached={_fetchMoreData}
                    onEndReachedThreshold={0.6}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => _onPressFeed(item)} style={styles.feedWrap} >
                            <Image style={styles.feedImage} source={{ uri: item.media.m }} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(_, id) => id.toString()}
                />
            </View>
        </View>
    )
}

export default Home