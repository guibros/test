// components/PiedDePage.js

import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

class PiedDePage extends React.Component {
    render() {
        return (
            <View style={styles.piedDePage}>
                <Button title="Charger météo" onPress={() => { this.props.onPress() }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    piedDePage: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    }
})

export default PiedDePage
