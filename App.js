import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from "./components/Button";

export default function App() {
    const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '.', '0', '/'];

    const buttonsPanel = buttons.map(button => {
        return (
            <Button
                key={button}
                value={button}
            />
        )
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>1234567</Text>
            {buttonsPanel}
            <Button
                value='C'
            />
            <Button
                value='='
            />
            <Button
                value='CE'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        width: '100%',
        padding: 10,
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 30
    }
});
