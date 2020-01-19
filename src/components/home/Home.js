import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation';

const Home = ({ navigation }) => {
    return(
        <View>
            <Text style={styles.title}>Self Quiz Test</Text>
            <TouchableOpacity onPress={() => navigation.push('Subject')}>
                <Text>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    title: {
        fontSize: 50
    }
});