import React from 'react'

import {
    View,
    Text,
} from 'react-native'

const Informacion = (props) => {
    const { nombres, apellidos } = props
    return (
        <View>
            <Text>{nombres} {apellidos}</Text>
        </View>
    )
}

export default Informacion