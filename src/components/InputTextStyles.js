import React from "react";
import {TextInput, StyleSheet} from 'react-native'
import { gray, white } from "../utils/colors";

const InputTextStyles = ({ value, placeholder, onChangeText }) => (
<TextInput
    style={styles.inputStyle}
    value={value}
    placeholder={placeholder}
    onChangeText={onChangeText}
/>
);

const styles = StyleSheet.create({
inputStyle: {
        backgroundColor: white,
        alignSelf:"stretch",
        fontSize: 20,
        height: 50,
        padding: 5,
        paddingLeft: 20,
        borderRadius: 50,
        borderColor: gray,
        margin: 20
    }
});


export default InputTextStyles