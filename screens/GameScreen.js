import { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { NumberContainer } from '../components/game/NumberContainer';
import { CustomTitle } from '../components/ui/CustomTitle';
import { CustomButton } from '../components/ui/CustomButton';

const generateRandomeBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if ( rndNum === exclude) {
    return generateRandomeBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomeBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert(
        'Don`t lie',
        'You know, that it`s wrong...',
        [{text: 'Sorry!', style: 'cancel'}]
      )
      return;
    } else if (direction === 'lower') {
      maxBoundary = currentGuess;
      const newRandomNum = generateRandomeBetween(minBoundary, maxBoundary, currentGuess);
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log('minBoundary: ', minBoundary);
    console.log('maxBoundary: ', maxBoundary);
    const newRandomNum = generateRandomeBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNum);
  }
  return (
    <View style={styles.container}>
      <CustomTitle>Opponent`s guess</CustomTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower</Text>
        <CustomButton onPress={nextGuessHandler.bind(this, 'lower')}>-</CustomButton>
        <CustomButton onPress={nextGuessHandler.bind(this, 'greater')}>+</CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 40,
  },
});
  