import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native';

const movie = {title: 'Doctor Sleep', year: '2019'};
const MOVIES_DATA = [
    {
        title: 'Doctor Sleep',
        year: '2019',
        poster: require('./img/doctor-sleep.jpg'),
    },
    {
        title: 'Midway',
        year: '2019',
        poster: require('./img/midway.jpg'),
    },
];

class Movie extends React.Component{
    render(){
        return(
            <View>
                <Text>{this.props.title}</Text>
                <Text>{this.props.year}</Text>
                <Image source = {this.props.poster}></Image>
            </View>
        )
    }
}

const MovieList = () => {
    return MOVIES_DATA.map(film => <Movie title={film.title} year={film.year} poster={film.poster}/>)
}


export {MovieList};
