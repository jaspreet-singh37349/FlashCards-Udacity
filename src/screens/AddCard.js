import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import ButtonStyles from '../components/ButtonStyles'
import { white, gray, blue } from "../utils/colors";
import { handlecreateCard } from "../actions/card";
import InputTextStyles from '../components/InputTextStyles'

class AddCard extends Component {
  static navigationOptions = () => ({
    title: "Add Card"
  });

  state = {
    question: "",
    answer: ""
  };

  handleinput1Change = (val) => {
    this.setState({ question:val })
  }
  handleinput2Change = (val) => {
    this.setState({ answer:val })
  }

  handleSubmit = () => {

    const { question, answer } = this.state;
    if(question.trim().length===0||answer.trim().length===0)
    {
      return alert("Please Enter Complete Details.")
    }

    const deckId = this.props.navigation.getParam("deckId");
    
    this.props.dispatch(handlecreateCard(deckId, question+"?", answer));

    this.props.navigation.goBack();
  };

  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.top}>
        <Text style={styles.textStyle}>Enter Your Question</Text>
        <InputTextStyles
          value={question}
          placeholder="e.g. Full-Form of JVM in Java"
          onChangeText={this.handleinput1Change}
        />
        
        <Text style={styles.textStyle}>Enter Your Answer</Text>
        <InputTextStyles 
          value={answer}
          placeholder="e.g. Java Virtual Machine"
          onChangeText={this.handleinput2Change}
        />
        
        <ButtonStyles color={blue} onPress={this.handleSubmit}>
          <Text>Create Card</Text>
        </ButtonStyles>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default connect()(AddCard);
