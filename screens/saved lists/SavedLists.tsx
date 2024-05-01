import { View, Text } from 'react-native'
import React from 'react'
import ListTemplate from '../../components/list template/ListTemplate'

const SavedLists = () => {
    return (
        <View>
            <ListTemplate isMyList={false} />
        </View>
    )
}

export default SavedLists