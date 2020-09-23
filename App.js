import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from "./components/Button";

export default function App() {
    const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '+', '*', '-', '/'];
    const [value, setValue] = useState('');

    const addSymbol = (symbol) => {
        setValue(value + symbol);
    };

    const buttonsPanel = buttons.map(button => {
        return (
            <Button
                press={() => addSymbol(button)}
                key={button}
                value={button}
            />
        )
    });

    const clearOne = () => {
        let newValue = String(value);
        setValue(newValue.substring(0, newValue.length - 1))
    };

    const clearAll = () => {
        setValue('');
    }
    const equal = () => {
        setValue(eval(value));
        console.log(value);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{value}</Text>
            {buttonsPanel}
            <Button
                value='C'
                press={clearOne}
            />
            <Button
                value='='
                press={equal}
            />
            <Button
                value='CE'
                press={clearAll}
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
        marginVertical: 50,
        height: 50,
        width: '100%',
        padding: 10,
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 30
    }
});
