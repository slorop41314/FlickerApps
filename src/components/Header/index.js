import React from 'react'
import { Header as NBHeader, Left, Icon, Body } from 'native-base'
import Text from '../Text'
import { StyleSheet } from 'react-native'
import { ColorList } from '../../utils/color'
export const Header = (props) => {
    return <NBHeader style={styles.background}>
        <Left>
            <Icon name="arrow-back" onPress={props.onPressLeft} />
        </Left>
        <Body>
            <Text>{props.title}</Text>
        </Body>
    </NBHeader>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: ColorList.white
    }
})