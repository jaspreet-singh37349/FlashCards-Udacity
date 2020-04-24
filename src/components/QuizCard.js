import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import ButtonStyles from "./ButtonStyles";
import { blue, white, gray, orange, pink } from "../utils/colors";

class QuizCard extends Component {
  state = {
    showAns: false
  };

  toggle = () => {
    this.setState({showAns:!this.state.showAns})
  };

  render() {
    const { showAns} = this.state;
    const { card } = this.props;
    
    return (
      <View style={styles.container}>
        <View>
          {!this.state.showAns ? (
            <Text style={styles.text}>{card.question}</Text>
          ) : (
            <Text style={styles.text}>{card.answer}</Text>
          )}
        </View>
        <View style={{ marginTop: 30 }}>
          <ButtonStyles
            onPress={this.toggle}
          >See {!showAns ? "Answer" : "Question"}</ButtonStyles>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: pink,
    margin: 10,
    alignSelf: "stretch",
    minHeight: 250,
    borderRadius: 10
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: white
  }
});

export default QuizCard;
