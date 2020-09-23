import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";


const Button = props => {
    return (
            <TouchableHighlight onPress={props.press} style={styles.button}>
                <View >
                    <Text>{props.value}</Text>
                </View>
            </TouchableHighlight>
    );
};

const styles = StyleSheet.create({

    button: {
        width: '22%',
        alignItems: "center",
        margin: 10,
        backgroundColor: "#DDDDDD",
        padding: 10
    },

});

export default Button;