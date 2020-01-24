import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Question = () => {
    const [quesAnswer, setQuesAnswer] = useState([{"q": "What is React?", "a": "React is a JavaScript library."}]);
    const [showAnswer, setShowAnswer] = useState(false);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>React</Text>
            
            <Text style={styles.question}>{quesAnswer[0].q}</Text>
            {showAnswer ? <Text style={styles.answer}>{quesAnswer[0].a}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={() => setShowAnswer(!showAnswer)}>
                <Text style={styles.buttonText}>
                    {showAnswer ? "Hide Answer": "Show Answer"}
                </Text>
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