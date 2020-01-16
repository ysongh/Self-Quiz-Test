import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Home = () => {
    return(
        <View>
            <Text style={styles.title}>Self Quiz Test</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    title: {
        fontSize: 50
    }
});