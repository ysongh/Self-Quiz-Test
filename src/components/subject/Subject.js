import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Subject = () => {
    return(
        <View>
            <Text style={styles.title}>Choose your subject</Text>
        </View>
    )
}

export default Subject;

const styles = StyleSheet.create({
    title: {
        fontSize: 50
    }
});