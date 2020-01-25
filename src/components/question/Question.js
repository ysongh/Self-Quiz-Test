import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import { data } from "../../Data";

const Question = () => {
    const [quesAnswer, setQuesAnswer] = useState(data);
    const [showAnswer, setShowAnswer] = useState(false);
    let [current, setCurrent] = useState({"q": data[0].q, "a": data[0].a})
    let [number, setNumber] = useState(0);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>React</Text>
            
            <Text style={styles.question}>{current.q}</Text>
            {showAnswer ? <Text style={styles.answer}>{current.a}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={() => setShowAnswer(!showAnswer)}>
                <Text style={styles.buttonText}>
                    {showAnswer ? "Hide Answer": "Show Answer"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                setNumber(number += 1);
                if(number < quesAnswer.length){
                    setShowAnswer(false);
                    setCurrent({"q": quesAnswer[number].q, "a": quesAnswer[number].a})
                }
            }}>
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