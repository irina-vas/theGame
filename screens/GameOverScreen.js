import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Colors } from '../constants/colors';
import { CustomTitle } from '../components/ui/CustomTitle';
import { CustomButton } from '../components/ui/CustomButton';

export const GameOverScreen = ({ roudsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.container}>
      <CustomTitle>GAME OVER!</CustomTitle>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/game_over.jpg')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roudsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <CustomButton onPress={onStartNewGame}>Start new game</CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  imageContainer: {
    borderRadius: 180,
    width: 320,
    height: 320,
    borderWidth: 3,
    borderColor: Colors.yellow,
    overflow: 'hidden',
    margin: 36,
    opacity: 0.6
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'EduNSWACTFoundation',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'EduNSWACTFoundation-bold',
    color: Colors.plum,
  }
});

