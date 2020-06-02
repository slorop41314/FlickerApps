import React from 'react'
import { Header as NBHeader, Left, Icon, Body } from 'native-base'
import Text from '../Text'
import { StyleSheet } from 'react-native'
import { ColorList } from '../../utils/color'
export const Header = (props) => {
    return <NBHeader style={styles.background}>
        <Left style={styles.left}>
            <Icon name="arrow-back" onPress={props.onPressLeft} />
            <Text>{props.title}</Text>
        </Left>
        <Body>
        </Body>
    </NBHeader>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: ColorList.white
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    }
})