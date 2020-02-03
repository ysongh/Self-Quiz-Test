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

            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.backButton} onPress={() => {
                    if(number > 0){
                        setNumber(number -= 1);
                        setShowAnswer(false);
                        setCurrent({"q": quesAnswer[number].q, "a": quesAnswer[number].a})
                    }
                }}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => {
                    if(number < quesAnswer.length - 1){
                        setNumber(number += 1);
                        setShowAnswer(false);
                        setCurrent({"q": quesAnswer[number].q, "a": quesAnswer[number].a})
                    }
                }}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
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
    buttonGroup:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        width: "45%",
        backgroundColor: "#64EE7A",
        alignSelf: "center",
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10
    },
    buttonText: {
        fontSize: 20,
        textAlign: "center"
    },
    backButton: {
        width: "45%",
        backgroundColor: "#C5D3C8",
        alignSelf: "center",
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10
    }
});