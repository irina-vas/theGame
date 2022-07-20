import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions, useWindowDimensions } from 'react-native';
import { Colors } from '../constants/colors';
import { CustomTitle } from '../components/ui/CustomTitle';
import { CustomButton } from '../components/ui/CustomButton';
import { ScrollView } from 'react-native-web';

export const GameOverScreen = ({ roudsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 90;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <CustomTitle>GAME OVER!</CustomTitle>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require('../assets/images/game_over.jpg')} />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roudsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <CustomButton onPress={onStartNewGame}>Start new game</CustomButton>
      </View>
    </ScrollView>
  )
}

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // width: deviceWidth < 380 ? 150: 300,
    // height: deviceWidth < 380 ? 150: 300,
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

