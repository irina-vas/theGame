import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert, FlatList } from 'react-native';
import { NumberContainer } from '../components/game/NumberContainer';
import { CustomTitle } from '../components/ui/CustomTitle';
import { CustomButton } from '../components/ui/CustomButton';
import { InstructionText } from '../components/ui/InstructionText';
import { Card } from '../components/ui/Card';
import { Ionicons } from '@expo/vector-icons';
import { GuessLogItem } from '../components/game/GuessLogItem';

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

export const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomeBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert(
        'Don`t lie',
        'You know that it`s wrong...',
        [{text: 'Sorry!', style: 'cancel'}]
      )
      return;
    }
    
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNum = generateRandomeBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNum);
    setGuessRounds(
      (prevGuessRounds) =>
        [newRandomNum, ...prevGuessRounds]
    );
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.container}>
      <CustomTitle>Opponent`s guess</CustomTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </CustomButton>
          </View>
        </View>
      </Card>
      <View>
        <FlatList
          data={guessRounds}
          alwaysBounceVertical={false}
          renderItem={(itemData) => (
            <GuessLogItem
              roundsNumber={guessRoundsListLength - itemData.index}
              opponentGuess={itemData.item}
            />
          )}
          keyExtractor={(item, index) => index}
        />
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
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  }
});
  