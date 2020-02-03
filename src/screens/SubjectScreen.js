import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Subject = ({ navigation }) => {
    return(
        <View>
            <Text style={styles.title}>Choose your subject</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Javascript</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.push('Question')}>
                    <Text style={styles.buttonText}>React</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CSS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>HTML</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Node</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Python</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Subject;

const styles = StyleSheet.create({
    title: {
        marginTop: 25,
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: 20
    },
    button: {
        width: "40%",
        backgroundColor: "#64EE7A",
        paddingVertical: 20,
        borderRadius: 10,
        marginVertical: 10
    },
    buttonText: {
        fontSize: 20,
        textAlign: "center"
    }
});