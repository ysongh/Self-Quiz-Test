import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Question = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>React</Text>
            <Text style={styles.question}>What is React?</Text>
            <Text style={styles.answer}>React is a JavaScript library.</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Question;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        marginBottom: 20,
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    },
    question:{
        fontSize: 22,
        marginBottom: 20,
    },
    answer:{
        fontSize: 20,
        marginBottom: 20
    },
    button: {
        width: "50%",
        backgroundColor: "#64EE7A",
        alignSelf: "center",
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10
    },
    buttonText: {
        fontSize: 20,
        textAlign: "center"
    }
});