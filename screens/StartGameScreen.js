import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text } from 'react-native';
import { Card } from '../components/ui/Card';
import { CustomButton } from '../components/ui/CustomButton';
import { CustomTitle } from '../components/ui/CustomTitle';
import { InstructionText } from '../components/ui/InstructionText';
import { Colors } from '../constants/colors';

export const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const numberInputHandler = (eneteredText) => {
    setEnteredNumber(eneteredText);
  }
  const resetInputHandler = () => {
    setEnteredNumber('')
  }
  const confirmInputHandler = () => {
    const chosenNumber = Number(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
      Alert.alert('Invalid number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okey', style: 'destructive', onPress: resetInputHandler }]
      )
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.container}>
      <CustomTitle>Guess my number</CustomTitle>
        <Card>
          <InstructionText>Enter a number</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            value={enteredNumber}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <CustomButton onPress={resetInputHandler}>Reset</CustomButton>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton onPress={confirmInputHandler}>Confirm</CustomButton>
            </View>
          </View>
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellow,
    borderBottomWidth: 2,
    color: Colors.yellow,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1,
  },
});
  
