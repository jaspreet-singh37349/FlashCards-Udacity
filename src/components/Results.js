import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { purple, white, gray, green, red, pink } from "../utils/colors";
import ButtonStyles from "./ButtonStyles";

const Resuts = ({correct,incorrect,restart,navigation}) => (
  <View style={styles.container}>
    <Text style={styles.textt}>You scored</Text>
    <Text style={styles.score}>{Math.round((correct * 100)/(correct+incorrect))}%</Text>
    
    <ButtonStyles color={pink} onPress={() => restart()}>Restart Quiz</ButtonStyles>
    <ButtonStyles color={red} onPress={() => navigation.goBack()} style={{ backgroundColor: gray }}>
      Go back to Deck
    </ButtonStyles>
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  textt: {
    fontSize: 30,
    fontWeight: "bold"
  },
  score: {
    fontSize: 70,
    color: green,
    marginBottom: 50
  }
});

export default Resuts;
