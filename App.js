import React from 'react';
import {MovieList} from './Movies';
import {BoatList} from './Boats';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    StatusBar,
} from 'react-native';


const App: () => React$Node = () => {
    return (
        <ScrollView>
        <View>
            <Text>Lesson 05 Exercises</Text>
            <View style = {styles.line} />
            <MovieList />
            <View style = {styles.line} />
            <Text style = {styles.boldText}>GetABoat - For Sale{"\n"}</Text>
            <BoatList />
        </View>
    </ScrollView>
    );
};


const styles = StyleSheet.create({
    boldText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30
    },
    line:{
        borderWidth: 0.5,
        borderColor:'black',
    }
});

export default App;
