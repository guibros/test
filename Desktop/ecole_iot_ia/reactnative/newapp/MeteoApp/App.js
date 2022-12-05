
 import React from 'react';
 import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
 import Entete from './components/Entete';
 import Meteo from './components/Meteo';
 import PiedDePage from './components/PiedDePage';
 import { API_KEY } from './asset/WeatherAPIKey.js';

 export default class App extends React.Component {
    state = {
        temperature: "--.--",
        description: " ",
        icone: this.getIcone('unknown')
    }

    componentDidMount() {
        console.log("je suis prêt");
        this.fetchMeteo();
    }

    render() {
        return (
            <SafeAreaView style={styles.main_container}>
            <StatusBar />
            <Entete />
            <Meteo
                temperature={this.state.temperature}
                description={this.state.description}
                icone={this.state.icone}
            />
            <PiedDePage onPress={() => {this.fetchMeteo();
                console.log("je fetch");}} />
            </SafeAreaView>
        )
    }

    fetchMeteo() {
        const URL = "http://api.openweathermap.org/data/2.5/weather?" + 
//           "q=Montreal,ca&lang=fr&units=metric&appid=" + "f29f5d4679785c63240b83b42f050dd8";
           "q=Montreal,ca&lang=fr&units=metric&appid=" + API_KEY;
 
            fetch(URL)
        .then(res => res.json())
        .then(json => {
            this.setState({
                temperature: json.main.temp,
                description: json.weather[0].description,
                icone: this.getIcone(json.weather[0].icon)
            });
        });
    }

    getIcone(nom) {
        switch (nom) {
            case 'unknown':
                return (require('./asset/unknown.png'));
            case '01d':
                return (require('./asset/01d.png'));
            case '01n':
                return (require('./asset/01n.png'));
            case '02d':
                return (require('./asset/02d.png'));
            case '02n':
                return (require('./asset/02n.png'));
            case '03d':
                return (require('./asset/03d.png'));
            case '03n':
                return (require('./asset/03n.png'));
            case '04d':
                return (require('./asset/04d.png'));
            case '04n':
                return (require('./asset/04n.png'));
            case '09d':
                return (require('./asset/09d.png'));
            case '09n':
                return (require('./asset/09n.png'));
            case '10d':
                return (require('./asset/10d.png'));
            case '10n':
                return (require('./asset/10n.png'));
            case '11d':
                return (require('./asset/11d.png'));
            case '11n':
                return (require('./asset/11n.png'));
            case '13d':
                return (require('./asset/13d.png'));
            case '13n':
                return (require('./asset/13n.png'));
            case '50d':
                return (require('./asset/50d.png'));
            case '50n':
                return (require('./asset/50n.png'));
            default:
                return (require('./asset/unknown.png'));
        }
    }
 }

 const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'yellow'
    }
 })