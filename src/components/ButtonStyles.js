import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { white } from "../utils/colors";

const ButtonStyles = ({ children, onPress, color }) => (
  <TouchableOpacity style={[styles.button, {backgroundColor:color}]} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    margin: 10,
    padding: 15,
    alignSelf:"stretch",
    marginLeft: 50,
    marginRight: 50
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: white
  }
});

export default ButtonStyles;
