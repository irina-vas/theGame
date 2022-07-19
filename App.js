import { useState } from 'react';
import { StyleSheet, ImageBackground, View, SafeAreaView, StatusBar } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { GameScreen } from './screens/GameScreen';
import { Colors } from './constants/colors';
import { GameOverScreen } from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  const gameOverHandler = () => {
    setGameIsOver(true);
  }

  let screen =
    <StartGameScreen
      onPickNumber={pickedNumberHandler}
    />;
  
  if (userNumber) {
    screen =
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
      />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={[Colors.darkPlum, Colors.yellow]}
    >
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25
  },
  screen: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});
