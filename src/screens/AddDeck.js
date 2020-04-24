import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import ButtonStyles from "../components/ButtonStyles";
import { handleAddDeck } from "../actions/decks";
import { getId } from "../utils/IdGenerator";
import InputTextStyles from '../components/InputTextStyles'
import {blue} from '../utils/colors'

class AddDeck extends Component {
  state = {
    input: ""
  };

  handleInputChange = input => {
    this.setState(() => ({
      input
    }));
  };

  handleSubmit = () => {

    if(this.state.input.trim().length===0)
    {
      return alert("Please Enter a Name of your deck.")
    }

    const deck = {
      id: getId(),
      name: this.state.input,
      cards: []
    }

    this.props.dispatch(handleAddDeck(deck)).then(()=>{
      this.setState({input:""})
      this.props.navigation.navigate("DeckDetail", {
        deckId: deck.id,
        name: deck.name
      });
    })
  }

  render() {
    const { input } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.label}>What will you learn in this deck?</Text>
        <InputTextStyles
          value={input}
          placeholder="e.g. Java"
          onChangeText={this.handleInputChange}
        />
        <ButtonStyles onPress={this.handleSubmit} color={blue}>
          <Text>Create Deck</Text>
        </ButtonStyles>        
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }  
});


export default connect()(AddDeck);
