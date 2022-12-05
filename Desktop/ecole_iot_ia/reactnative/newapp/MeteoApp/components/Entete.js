// components/Entete.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Entete extends React.Component {
    render() {
        return (
            <View style={styles.entete}>
                <Text style={styles.titre}>MaMétéo</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    entete: {
        height: 50,
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    titre:{
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 20
    }
})

export default Entete