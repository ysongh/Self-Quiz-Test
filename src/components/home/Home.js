import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Self Quiz Test</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push('Subject')}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 50
    },
    button: {
        width: "70%",
        backgroundColor: "#64EE7A",
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 25,
        textAlign: "center"
    }
});