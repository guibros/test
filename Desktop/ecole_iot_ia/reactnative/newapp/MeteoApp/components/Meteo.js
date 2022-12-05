// components/Meteo.js


import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class Meteo extends React.Component {
    render() {
        return (
            <View style={styles.meteo}>
                <Image style={styles.icone} source={this.props.icone}/>
                <Text> {this.props.description} </Text>
                <Text style={styles.temperature}> {this.props.temperature} &deg;C</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    meteo: {
        flex: 1,
        alignItems: 'center'
    },
    icone: {
        marginTop: 40
    },
    temperature:{
        fontSize: 40,
        fontWeight: "bold"
    }
})

export default Meteo

