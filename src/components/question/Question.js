import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Question = () => {
    return(
        <View>
            <Text style={styles.title}>React</Text>
            <Text>What is React?</Text>
            <Text>React is a JavaScript library.</Text>
        </View>
    )
}

export default Question;

const styles = StyleSheet.create({
    title: {
        marginTop: 25,
        fontSize: 30,
        textAlign: "center"
    }
});